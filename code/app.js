// es6找最小值
const arr = [12,34,32,89,4];
const num = (i) => Math.min(...i);
num(arr); 



// Promise 代码改进
new Promise(resolve=>{
    const a = 'hello'
    setTimeout(()=>{
       resolve(a)
    },10)
}).then(value=>{
    return new Promise(resolve=>{
        const b = 'lagou'
        setTimeout(()=>{
            resolve(value+b)
        },10)
    })
}).then(value=>{
    const c = "I * U"
    setTimeout(()=>{
        console.log(value+c)
    },10)
})


