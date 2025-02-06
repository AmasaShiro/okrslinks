const PERIOD_ORDER = ["daily", "weekly", "monthly", "quarterly", "yearly"];

async function okrslinks (tp) {
    // get environment: folder path for usser script functions and language
    const lang = window.localStorage.getItem('language') || "en";
    const confPath = app.plugins.getPlugin('templater-obsidian').settings.user_scripts_folder + "/";

    // specify the JSON file
    const confFileExists = await tp.file.exists(confPath + `okrslinks_${lang}.json`);
    const confFilename = confFileExists ? confPath + `okrslinks_${lang}.json` : confPath + "okrslinks_en.json";

    // return value
    let o = {}

    try {
        // from json
        const confTFile = app.vault.getFileByPath(confFilename);
        if (confTFile) {
            const confJSON = await app.vault.read(confTFile);
            if (confJSON) {
                const conf = JSON.parse(confJSON);
                conf.lang = lang;

                // from json
                const { author, documents, dateFormats } = conf;
                const { created, published } = dateFormats;
                const { corePrinciplesNote } = documents;
                const { authorName } = author;

                // created date and core principles document name
                o = {
                    authorName,
                    corePrinciplesNote,
                    createdDate: tp.date.now(created),
                    lang
                };
                // retrieve periodic notes settings
                const pnSettings = app.plugins.getPlugin('periodic-notes')?.settings || {};

                const periods = {};
                for (const periodName of PERIOD_ORDER) {
                    const { titleFormat, defaultFormat, offsetNextPeriod } = conf[periodName] || {};
                    const { folder, format: pnFormat } = pnSettings[periodName] || {};
                    periods[periodName] = {
                        folder,
                        format: pnFormat || defaultFormat,
                        titleFormat,
                        offsetNextPeriod,
                    };
                }

                // heading for thino
                const thinoPlugin = app.plugins.getPlugin('obsidian-memos');
                o.thinoPlace = thinoPlugin ? thinoPlugin.settings.InsertAfter : "";

                // current note name
                const thisFilename = tp.file.title;

                // period for current note
                const thisFolder = tp.file.folder(true);
                const currentPeriod = Object.entries(periods).find(([, { folder }]) => folder === thisFolder);

                if (!currentPeriod) {
                    return o;
                }

                // create strings for current period
                const [periodName, { folder, format, titleFormat, offsetNextPeriod }] = currentPeriod;

                o.titleDate = tp.date.now(titleFormat, 0, thisFilename, format);
                o.publishedDate = tp.date.now(published, offsetNextPeriod, thisFilename, format);
                o.prev = folder + "/" + tp.date.now(format, -1, thisFilename, format);
                o.next = folder + "/" + tp.date.now(format, offsetNextPeriod, thisFilename, format);

                // create links to upper level
                const higherPeriods = Object.keys(periods).slice(PERIOD_ORDER.indexOf(periodName) + 1);
                for (let i = 0; i < higherPeriods.length; i++) {
                    const higherPeriod = higherPeriods[i];
                    o[higherPeriod] = periods[higherPeriod].folder + "/" + tp.date.now(periods[higherPeriod].format, 0, thisFilename, format);
                }
            } else {
                o.error = "Error reading JSON configuration file.";
            }
        } else {
            o.error = "No configuration file: " + confFilename;
        }
    } catch (error) {
        console.error("error for the process configuration file.")
        o.error = "Error for the process configuration file";
    }

    return o;
}

module.exports = okrslinks;
