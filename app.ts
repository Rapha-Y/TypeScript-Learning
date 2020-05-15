let userInput:unknown;
let userName:string;

userInput = 7;
userInput = 'May';
if(typeof userInput === 'string') {
    userName = userInput;
}

function generateError(message:string, code:number):never { 
    throw {
        message: message,
        errorCode: code
    };
}

generateError('An error occurred!', 500);