const fs = require('fs');

module.exports = function(folder) {
    let list = [];
    fs.readdirSync(folder).forEach(file => {
        list.push(file);
    });
    return list
};
