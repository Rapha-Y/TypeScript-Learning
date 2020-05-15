var userInput;
var userName;
userInput = 7;
userInput = 'May';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code
    };
}
generateError('An error occurred!', 500);
