

// an proper Dealay function promise

function delayfn(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

console.log('Promise started') 
delayfn(2000).then(() => console.log('after 2 seconds Promise resolved'))
console.log('Promise ended') 


function dividedFn(num1, num2) {
    return new Promise((resolve, reject)=> {
        if (num2 === 0) {
            reject('cannot divide by zero')
        
        } else { 
            resolve(num1 / num2) 
        }
    })
}

// using the promise with then and catch

dividedFn(10,2)
.then(result => console.log('result is', result))
.catch(err => console.log('error is', err)) 

// everytime using the promise we need to add the .then and .catch, but with async await we can handle the promise in a more readable way without using the .then and .catch

async function dividedAsync(num1, num2) {
    try {
        const result = await dividedFn(num1, num2)
        console.log('result is', result)
    } catch (err) {
        console.log('error is', err)
    }
}

dividedAsync(10,2)  