const fs = require('fs');

module.exports = function(file) {
    fs.unlinkSync(file);
};

