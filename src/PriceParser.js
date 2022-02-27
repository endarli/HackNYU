Tesseract.recognize(
    'Capture6.png',
    'eng',
 { logger: m => console.log(m) }
).then(({ data: { text } }) => {
    console.log(text);
    const wordArr = text.split(/\s+/);
    find_total(wordArr);
}).catch(err=>{
    console.log(err);
})

function find_total(wordArr) {
    for(i = wordArr.length-1; i >=0; i--) {
        var formatter = wordArr[i].toLowerCase().replace(/\s/g, "");
        if(formatter.includes("total") || formatter.includes("balance") || formatter.includes("due") || formatter.includes("amount")) {
            // Then we pass the array sliced from formatter onwards to helper function.
            wordArr = wordArr.slice(i);
            find_total_helper(wordArr);
            // document.getElementById("textfield").innerHTML+=wordArr[i+1];
            break;
        }
    }
}

function find_total_helper(wordArr) {
    for(i = 0; i < wordArr.length; i++) {
        console.log(wordArr[i]);
        if(wordArr[i].charAt(0)=='$') {
            wordArr[i] = wordArr[i].slice(1);
        }
        let checkIfFloat = parseFloat(wordArr[i]);
        if(!isNaN(checkIfFloat) && checkIfFloat != "" && checkIfFloat != " ") { // First instance of a floating-point after one of the "total" key words
            document.getElementById("textfield").innerHTML+=wordArr[i]; // Logs result of scan directly to the web page.
            break;
        }
    }
}