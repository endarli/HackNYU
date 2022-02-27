const imgFiles = ["Test1.png","Test2.png","Test3.png"];
const testFiles = ["Test1.png", "Test2.png", "Test3.png"];

// for(i = 0; i < imgFiles.length; i++) {
//     parseText(imgFiles[i]);
// }

parseText("Test2.png");

function parseText(fileName) {
    Tesseract.recognize(
    fileName,
    'eng',
 { logger: m => console.log(m) }
).then(({ data: { text } }) => {
    console.log(text);
    const wordArr = text.split(/\s+/);
    findTotal(wordArr);
}).catch(err=>{
    console.log(err);
})
}

function parseTextTest(fileName, callback) {
    Tesseract.recognize(
    fileName,
    'eng',
 { logger: m => console.log(m) }
).then(({ data: { text } }) => {
    console.log(text);
    const wordArr = text.split(/\s+/);
    findTotal(wordArr);
    callback();
}).catch(err=>{
    console.log(err);
})
}

function findTotal(wordArr) {
    for(i = wordArr.length-1; i >=0; i--) {
        var formatter = wordArr[i].toLowerCase().replace(/\s/g, "");
        if(formatter.includes("total") || formatter.includes("balance") || formatter.includes("due") || formatter.includes("amount")) {
            // Then we pass the array sliced from formatter onwards to helper function.
            wordArr = wordArr.slice(i);
            findTotalHelper(wordArr);
            // document.getElementById("textfield").innerHTML+=wordArr[i+1];
            break;
        }
    }
}

function findTotalHelper(wordArr) {
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

var i = 0;

function assert_caller() {
    console.log("assert called!");
    assert(testFiles[i]);
    i++;
}

function assert(fileName) {
    const res = parseTextTest(fileName, assert_caller);
    switch(fileName) {
        case "Test1.png":
            if(res!=135.65) {
                console.log(fileName + " test case failed.");
            } else {
                console.log(fileName + " test case passed.");
            }
            break;
        case "Test2.png":
            if(res!=22.11) {
                console.log(fileName + " test case failed.");
            } else {
                console.log(fileName + " test case passed.");
            }
            break;
        case "Test3.png":
            if(res!=51.07) {
                console.log(fileName + " test case failed.");
            } else {
                console.log(fileName + " test case passed.");
            }
            break;
    }
}