let n = 5  // some number

let sum = 0;

for(let i = 1; i <= 2*n; i++) {   // 2n + 1 
  sum = sum + 1                   // n
}

f(n) = 2n + n + 1
     = 3n + 1
     = O(n)

------------------------------
b.

let sum = 0;

for(let i = 1; i <= n*n; i++) {   // n^2 + 1 
  sum = sum + 1                   // n
}

f(n) = n^2 + n + 1
     = O(n^2)

------------------------------
c.

let sum = 0;

for(let i = 1; i <= n; i++) {     // n+1
  sum = sum + n                   // n
}

f(n) = n + 1
     = 2n + 1
     = O(n)

------------------------------
d. 

let sum = 0;

for(let i = 1; i <= n; i++) {       // n+1
  for(let j = 1; j <= i; j++) {     // n*(n+1)
    sum = sum + i                   // n*n
  }           
}

f(n) = n + 1 + n( n + 1) + n*n
     = n + 1 + n^2 + n + n^2
     = 2n^2 + 2n + 1
     = O(n^2)
------------------------------
e. 

let sum = 0;

for(let i = 1; i <= 100; i++) {     // 100+1
  for(let j = 1; j <= n; j++) {     // 100*(n+1)
    sum = sum + i                   // 100*n
  }           
}

f(n) = 100 + 1 + 100( n + 1) + 100*n
     = 101 + 100n + 100 + 100n
     = 2(100n) + 201
     = O(n)

------------------------------
f.

let sum = 0;
let n = 8
for(let i = 1; i <= n; i++) {       // n + 1         J   C   new J
  for(let j = 1; j <= n; j*=2) {    // log2(n) --->  2^0 x 2 = 2^1  = 2
    sum = sum + 1 // log2(n)        //         --->  2^1 x 2 = 2^2  = 4
  }                                 //         --->  2^2 x 2 = 2^3  = 8
}                                              --->  2^3 X 2 = 2^4  = 16 ( j > n)

2^k = n
log2(n) = j

f(n) = n+1 + log2(n) + log2(n)
     = O(log2n)
     

