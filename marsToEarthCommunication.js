

module.exports.handler = async (event, context) => {

    var numToChar = {
        '9999': 'z', '999': 'y', '99': 'x', '9': 'w',
        '888': 'v', '88': 'u', '8': 't',
        '7777': 's', '777': 'r', '77': 'q', '7': 'p',
        '666': 'o', '66': 'n', '6': 'm',
        '555': 'l', '55': 'k', '5': 'j',
        '444': 'i', '44': 'h', '4': 'g',
        '333': 'f', '33': 'e', '3': 'd',
        '222': 'c', '22': 'b', '2': 'a'
    }

    const data = JSON.parse(event.body);
    const messageInNumber = data.msg;

    let englishMessageArray = [];
    for (let i = 0; i < messageInNumber.length; i++) {
        for (const key in numToChar) {
            if (messageInNumber[i] === key) {
                englishMessageArray.push(numToChar[key]);
            }
            if (messageInNumber[i] === " ") {
                englishMessageArray.push(" ");
                break;
            }
        }
    }
    let englishMessage = englishMessageArray.join("");
    return {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Origin": "*",
        },
        statusCode: 200,
        body: JSON.stringify(englishMessage)
    };
    

}