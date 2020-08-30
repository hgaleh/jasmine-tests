// Window methods

// Alert
// window.alert('Message');

// Prompt, takes an input from user
// const input = prompt(); // take sth from user
// alert(input) // show it

// Confirm
// if(confirm('Are you sure?')) {
//     console.log('ok')
// }

// window.outerHeight
// window.outerWidth
// window.innerHeight
// window.innerWidth

// console.log(window.scrollY)

// window.location.href = ''
// window.location.reload()

// History object
// window.history.go(-1) // go previous in history
// window.history.length

// Navigator
// Related to browser itself for example: chrome, firefox, ...
 

// DOM

export const math = {
    sum(a, b) {
        return a + b;
    },
    sub(a, b) {
       return a-b; 
    }
}

export {math};
// exports.math = math;