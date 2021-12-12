const fs = require('fs-extra');
const path = require('path');
const multer = require('@koa/multer');
const moment = require('moment');
const { v4: uuid } = require('uuid');
const mega = 1024000;
const allowExt = ['jpg', 'jpeg', 'gif', 'png'];

const destination = async (req, fiel, cb) => {
  try {
    const folder = path.join(
      __dirname,
      '../',
      'storages',
      moment().format('YYMMDD'),
    );
    await fs.ensureDir(folder);
    cb(null, folder);
  } catch (err) {
    cb(err);
  }
};

const filename = (req, file, cb) => {
  try {
    const ext = path.extname(file.originalname).toLowerCase();
    const filename = moment().format('YYMMDD') + '_' + uuid() + ext;
    cb(null, filename);
  } catch (err) {
    cb(err);
  }
};

const fileFilter = function fileFilter(req, file, cb) {
  try {
    const ext = path.extname(file.originalname).substr(1).toLowerCase();
    if (allowExt.includes(ext)) cb(null, true);
    else cb(new Error(`첨부하신 파일은 이미지가 아닙니다.`));
  } catch (err) {
    cb(err);
  }
};

const storage = multer.diskStorage({ destination, filename });
const limits = { fileSize: mega * 5 };

module.exports = multer({ storage, limits, fileFilter });
