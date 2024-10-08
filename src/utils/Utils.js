//server response
export function subscribe({email, validEmail}) {
    const delay = (0.7 + Math.random() * 2) * 1000;

    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (validEmail === true && !!email) {
                resolve()
            } else {
                reject(new Error('Invalid email!'))
            }
        }, delay)
    })
}

// export function login({email, password}) {
//     const delay = (0.7 + Math.random() * 2) * 1000;

//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             if (password === 'Edhuva' && !!email) {
//                 resolve()
//             } else {
//                 reject(new Error('Invalid Email or Password'))
//             }
//         }, delay)
//     })
// }