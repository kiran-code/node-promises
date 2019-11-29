const userLeft = false;
const userWatchingCatMeme = true;
/****************************** Using Callback functions *******************************************/
function watchTutorialOnCallBack(callback, errorCallback) {

    if(userLeft) {
        var d = new Date();
        var n = d.getMilliseconds();
        console.log('errorCallback at',n);
        errorCallback({status:'User Left', message: ':('})
    } else if(userWatchingCatMeme) {
        var d = new Date();
        var n = d.getMilliseconds();
        console.log('errorCallback at',n);
        errorCallback({status: 'User watching cat meme', message:'User not learning Promises'})
    } else {
        var d = new Date();
        var n = d.getMilliseconds();
        console.log('callback at',n);
        callback({status: 'User Watching Promise Tutorials', message: 'Gonna finish lot of work then'})
    }
}

watchTutorialOnCallBack((message) => {
    console.log('Success', message)
}, (error) => {
    console.log('Failure', error)
})
/**************************** End of Callback functions *******************************************/

function watchTutorialOnPromise(){
    return new Promise((resolve, reject) => {
        if(userLeft) {
            var d = new Date();
            var n = d.getMilliseconds();
            console.log('promise rejected at',n);
            reject({status:'User Left', message: ':('})
        } else if(userWatchingCatMeme) {
            var d = new Date();
            var n = d.getMilliseconds();
            console.log('promise rejected at',n);
            reject({status: 'User watching cat meme', message:'User not learning Promises'})
        } else {
            var d = new Date();
            var n = d.getMilliseconds();
            console.log('promise resolved at',n);
            resolve({status: 'User Watching Promise Tutorials', message: 'Gonna finish lot of work then'})
        }
    })
}

watchTutorialOnPromise().then((message) => {
    console.log('Success ', message);
}).catch((error) => {
    console.log('Failure ', error);
});
