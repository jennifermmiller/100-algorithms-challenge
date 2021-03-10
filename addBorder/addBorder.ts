export function addBorder(picture: string[]): string[] {
  const picLength = picture[0].length + 2;
  
  const horzBorder = new Array(picLength).join('*');

  const addHorzBorder = [horzBorder].concat(picture, horzBorder);

  const addVertBorders = addHorzBorder.map(line => `*${line}*`);

  return addVertBorders;
}

console.log(addBorder(["abc", "ded"]));

// Alternative:
// function addBorder(picture: string[]): string[] {
//   const wall = '*'.repeat(picture[0].length + 2); //uses String.repeat

//   picture.unshift(wall);
//   picture.push(wall);
  
//   for (let i = 1l i < picture.length -1; i++) {      
//      picture[i] = '*'.concat(picture[i], '*');
//   } 

//   return picture;
// }