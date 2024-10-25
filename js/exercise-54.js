const numbers = [1,2,3,4,5];

const callback = (value) => {
    console.log(`Processing value: ${value}`);
    return callback;
};
const sum = numbers.reduce((acc, value)=>{
    return acc(value);
}, callback);


