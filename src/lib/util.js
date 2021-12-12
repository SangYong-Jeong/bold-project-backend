const relPath = (file) => `/uploads/${file.split('_')[0]}/${file}`;

module.exports = { relPath };
