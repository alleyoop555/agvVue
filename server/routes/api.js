const express = require('express');
const router = express.Router();

const fileList = require('../api/common/filelist');
const agvReport = require('../api/Report/fileshow');

/* show file list */
folder = './data';
router.get('/report/filelist', (req, res)=>{
    console.log('----------');
    console.log('Get file list');
    let list = fileList(folder);
    res.json({list: list})
});

/* show file figure */
router.get('/report/fileshow/:file', (req, res)=> {
    console.log('----------');
    console.log('Show file: ' + req.params.file);
    const file = `./data/${req.params.file}`;
    const report = new agvReport(file);
    report.getAll(()=> {res.json(report.figure);})
});

module.exports = router;
