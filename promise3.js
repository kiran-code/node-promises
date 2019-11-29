const recordVideoOne = new Promise((resolve, reject) => {
    const date = new Date();
    const time = date.getMilliseconds();
   resolve(`Finished recording video one at ${time}`);
});

const recordVideoTwo = new Promise((resolve, reject) => {
    const date = new Date();
    const time = date.getMilliseconds();
    resolve(`Finished recording video Two at ${time}`);
});

const recordVideoThree = new Promise((resolve, reject) => {
    const date = new Date();
    const time = date.getMilliseconds();
    resolve(`Finished recording video Three at ${time}`);
});

Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then((messages) => {console.log(messages)});
Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree]).then((message) => {console.log(message)});
