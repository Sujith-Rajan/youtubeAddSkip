setInterval(function(){
    const skipAdd = document.getElementsByClassName('ytp-ad-skip-button');
    if(skipAdd !== null && skipAdd.length > 0){
        console.log("Ad detected");
        skipAdd[0].click();
    }
}, 2000);


// setTimeout(() =>{var skipAd = document.getElementsByClassName('ytp-ad-skip-button');

// if (skipAd.length > 0) {
//     skipAd[0].click(); // Click the first element in the collection
// } },3000);