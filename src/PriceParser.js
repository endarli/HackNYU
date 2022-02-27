/**
 * Price parser from receipt image. Built using Tesseract.js library.
*/

/**
 * Utilizes the Tesseract.js OCR to translate text in an image into words.
 * After the text has been converted into a string, the string is split by whitespace characters,
 * and stored in a string array. This string array is then passed as an argument
 * to methods that search for 
 * 
 * @param fileName - The file name of the receipt we are reading the total amount from. Must be passed as a String.
 * 
 * @return returns the floating-point value of the total parsed from the receipt.
 */

parseText("Test1.png");

function parseText(fileName) {
    Tesseract.recognize(
        fileName,
        'eng',
     { logger: m => console.log(m) }
    ).then(({ data: { text } }) => {
        console.log(text);
        const wordArr = text.split(/\s+/);
        const result = find_total(wordArr);
        return result;
    }).catch(err=>{
        console.log(err);
        throw (err);
    })
}

/**
 * Using an array of strings, finds the last instance of words that indicate "total amount of money".
 * Passes this index to a helper function, along with a sliced portion of the array from the index onwards.
 * 
 * @param {*} wordArr - the string of all words from our Tesseract OCR, split into an array of strings.
 * 
 * @return the result of finding the floating-point value of the total read from the receipt.
 */
function find_total(wordArr) {
    var i;
    for(i = wordArr.length-1; i >=0; i--) {
        var formatter = wordArr[i].toLowerCase().replace(/\s/g, "");
        if(formatter.includes("total") || formatter.includes("balance") || formatter.includes("due") || formatter.includes("amount")) {
            // Then we pass the array sliced from formatter onwards to helper function.
            wordArr = wordArr.slice(i);
            return find_total_helper(wordArr);
            // document.getElementById("textfield").innerHTML+=wordArr[i+1];
        }
    }
}

/**
 * Using a preprocessed string of arrays, finds the instance that best matches the floating-point value for the grand total.
 * 
 * @param {*} wordArr - string array of words parsed from the receipt by Tesseract OCR. Preprocessed by find_total().
 * 
 * @return a floating-point value containing the total amount read from the receipt. Bubbles up the call stack to parseText().
 */
function find_total_helper(wordArr) {
    for(i = 0; i < wordArr.length; i++) {
        console.log(wordArr[i]);
        if(wordArr[i].charAt(0)=='$') {
            wordArr[i] = wordArr[i].slice(1);
        }
        let checkIfFloat = parseFloat(wordArr[i]);
        if(!isNaN(checkIfFloat) && checkIfFloat != "" && checkIfFloat != " ") { // First instance of a floating-point after one of the "total" key words
            document.getElementById("textfield").innerHTML+=wordArr[i]; // Logs result of scan directly to the web page.
            return wordArr[i];
        }
    }
}