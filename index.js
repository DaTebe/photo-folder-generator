const moment = require("moment");
const fs = require("fs");
const path = require("path");
const generatorYear = process.env.YEAR || "2021";
const generatorFolder = process.env.OUTPUT_FOLDER || "output";

try {
    const end = moment().year(parseInt(generatorYear)).endOf('year').format("YYYY-MM-DD");
    let iterator = moment().year(parseInt(generatorYear)).startOf('year');

    if (!fs.existsSync(generatorFolder)){
        fs.mkdirSync(generatorFolder);
    }

    while(iterator.isBefore(end) || iterator.isSame(end)) {
        console.log(iterator.format("YYYY.MM.DD"));
        fs.mkdirSync(path.join(generatorFolder, iterator.format("YYYY.MM.DD")));
        iterator.add(1, "d");
    }

} catch(e) {
    console.error("ENV variable YEAR must be a number");
}