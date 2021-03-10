export function addTwoDigits(n: any): number {
  const splitNumber = n.toString().split('');

  const sum = splitNumber.reduce((acc:string, cur:string): number => parseInt(acc, 10) + parseInt(cur, 10));

  return sum;
}

console.log(addTwoDigits(29));


// Problem clearly says two digits. Solved above for any number of digits
// Alternative:
// export function addTwoDigits(n: any): number {
//   const splitNumber = n.toString().split('');

//   return parseInt(splitNumber[0], 10) + parseInt(splitNumer[1], 10));
// }