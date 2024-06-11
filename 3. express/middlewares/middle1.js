function myMiddleware(req, res, next){
    console.log('I am a middle 1');
    next();
}

module.exports = myMiddleware;