//案内
'use strict';
const fs = require('node:fs');
const pug = require('pug');
function handleStyleCssFile(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/css'
  });
  const file = fs.readFileSync('./public/style.css');
  res.end(file);
}

function handleFaviconFile(req, res) {
  res.writeHead(200, {
    'Content-Type': 'image/vnd.microsoft.icon'
  });
  const file = fs.readFileSync('./favicon.ico');
  res.end(file);
}

function handleOneWordJsFile(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/javascript'
  });
  const file = fs.readFileSync('./public/one-word.js');
  res.end(file);
}

function handleLogout(req, res) {
  res.writeHead(401, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('ログアウトしました');
}

function handleBadRequest(req, res) {
  res.writeHead(400, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.end('未対応のリクエストです');
}

function handleNotFound(req, res) {
  res.writeHead(404, {
    'Content-Type': 'text/html; charset=utf-8'
  });
  res.end(pug.renderFile('./views/404.pug'));
}
module.exports = {
  handleStyleCssFile,
  handleLogout,
  handleFaviconFile,
  handleOneWordJsFile,
  handleBadRequest,
  handleNotFound
};