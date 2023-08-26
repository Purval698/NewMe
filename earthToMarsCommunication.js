

module.exports.handler = async (event, context) => {
    var charToNum = {
        'a': 2, 'b': 22, 'c': 222,
        'd': 3, 'e': 33, 'f': 333,
        'g': 4, 'h': 44, 'i': 444,
        'j': 5, 'k': 55, 'l': 555,
        'm': 6, 'n': 66, 'o': 666,
        'p': 7, 'q': 77, 'r': 777, 's': 7777,
        't': 8, 'u': 88, 'v': 888,
        'w': 9, 'x': 99, 'y': 999, 'z': 9999
    };

    const data = JSON.parse(event.body);
    const userMessage = data.msg;

    let numericMessageArray = [];

    for (let i = 0; i < userMessage.length; i++) {
        for (const chr in charToNum) {
            if (userMessage[i] === chr) {
                numericMessageArray.push(charToNum[chr]);
            }
            if (userMessage[i] === " ") {
                numericMessageArray.push(" ");
                break;
            }
        }

    };

    let numericMessage = numericMessageArray.join("");
    return {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Methods": "*",
            "Access-Control-Allow-Origin": "*",
        },
        statusCode: 200,
        body: JSON.stringify(numericMessage)
    };

};