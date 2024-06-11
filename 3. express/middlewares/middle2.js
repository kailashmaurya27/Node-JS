function myMiddleware1(req, res, next){
    console.log('I am a middle 2');
    next();
}

module.exports = myMiddleware1;