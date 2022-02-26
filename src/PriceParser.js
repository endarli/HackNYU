Tesseract.recognize(
    'Capture3.png',
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
            if(wordArr[i+1].charAt(0)!='$') {
                wordArr[i+1] = "$" + wordArr[i+1];
            }
            document.getElementById("textfield").innerHTML+=wordArr[i+1];
            break;
        }
    }
}

function find_total_price_int(wordArr) {
    for(i = 0; i < wordArr.length; i++) {
        console.log(wordArr[i]);
    }

    // for(i = 0; i < wordArr.length; i++) {
    //     const res = wordArr[i].split(/\r?\n/);
    //     console.log(res);
    //     for(j = 0; j < res.length; j++) {
    //         console.log(res[j]);
    //         if(!isNaN(res[j]) && (res[j].toString().indexOf('.') != -1)||res[j].includes("$") ){
    //             document.getElementById("textfield").innerHTML += res[j];
    //         }
    //     }
    // }
}