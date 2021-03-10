export function absoluteValuesSumMinimization(a: number[]): number {
    // if even, divide length by 2 and substract one (for index)
    // if odd, divide  length by 2 and round down
    const median = a.length%2 === 0 ? a.length/2 - 1 : Math.floor(a.length/2) ;
    
    return a[median];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));


// Alternative:
// export function absoluteValuesSumMinimization(a: number[]): number {
//     const isEven = a.length%2 === 0;
    
//     return isEven ? a[a.length/2 - 1] : a[Math.floor(a.length/2)];
// }