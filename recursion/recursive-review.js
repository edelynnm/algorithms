function factorial (n) {
    let result = 1;
    for(let i = 1; i <=n; i++) {
        result *= i
    }
    return result
}

function factorial (n, answer = 1) {
    if (n === 1) {
        return answer
    }

    answer = n * answer
    return factorial(n-=1, answer)
}

function factorial (n) {
    if(n===0) {
        return 1
    }

    return n * factorial(n-1) // 5 X (4 X (3 X (2)))
}

const power = (x, n) => {
    if (n === 0 ) {
        return 1
    } 

    return x * p(x, (n-1))
}


const p = (x, n) => {
    let res;

    if (n === 0 ) { //base
        res = 1
    } else if (n % 2 !== 0) { //odd
        const y = p(x, (n-1)/2)
        res = x * y * y
    } else {
        const y = p(x, n /2) //even
        res =  y * y
    }
    return res
}

// first in function, last out function


console.log(p(5,7))