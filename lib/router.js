//URLを見て振り分ける案内係
'use strict';

const postsHandler = require('./posts-handler');
const util = require('./handler-utils');

function route(req, res) {
    switch (req.url) {
        case '/':
        case '/posts':
            postsHandler.handle(req, res);
            break;
        case '/style.css':
            util.handleStyleCssFile(req, res);
            break;    
        case '/one-word.js':
            util.handleOneWordJsFile(req, res);
            break;
        case '/favicon.ico':
            util.handleFaviconFile(req, res);
            break;    
        case '/logout':
            util.handleLogout(req, res);
            break;
        case '/':
        case '/posts':
            postsHandler.handle(req, res);
            break;
        case '/posts/delete':
            postsHandler.handleDelete(req, res);
            break;
        default:
            util.handleNotFound(req, res);
            break;
            break;
    }
}


module.exports = {
    route
};