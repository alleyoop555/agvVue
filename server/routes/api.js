const express = require('express');
const router = express.Router();

const fileList = require('../api/public/filelist');

/* show file list */
folder = './data';
router.get('/report/filelist', (req, res)=>{
    console.log('----------');
    console.log('Get file list');
    let list = fileList(folder);
    res.json({list: list})
});

module.exports = router;
