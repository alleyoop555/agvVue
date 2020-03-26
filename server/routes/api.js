const express = require('express');
const router = express.Router();

const fileList = require('../api/common/filelist');
const agvReport = require('../api/Report/fileshow');
const deleteFile = require('../api/common/deletefile');

/* get file list */
folder = './data';
router.get('/report/filelist', (req, res)=>{
    console.log('----------');
    console.log('Get file list');
    let list = fileList(folder);
    res.json({list: list})
});

/* get file figure */
router.get('/report/fileshow/:file', (req, res)=> {
    console.log('----------');
    console.log('Show file: ' + req.params.file);
    const file = `./data/${req.params.file}`;
    const report = new agvReport(file);
    report.getAll(()=> {res.json(report.figure);})
});

/* delete selected file */
router.delete('/report/delete_file/:file', (req, res)=>{
    console.log('----------');
    console.log(`Delete file: ${req.params.file}`);
    const file = `./data/${req.params.file}`;
    deleteFile(file);
    res.send(`Delete file ${req.params.file}`);
});


module.exports = router;
