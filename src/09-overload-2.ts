// Nico => [N,i,c,o] => string => string[];
// [N,i,c,o] => Nico => [string] => string;

export function parseStr(input: string): string[];
export function parseStr(input: string[]): string;
export function parseStr(input: number): boolean;

// export function parseStr(input: string | string[]): string | string[] {
//   if (Array.isArray(input)) {
//     return input.join(''); // string
//   } else {
//     return input.split(''); // string[]
//   }
// }
export function parseStr(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string'){
    return input.split(''); // string[]
  } else if (typeof input === 'number'){
    return true; // boolean
  }
}


const rtaArray = parseStr('Kowany');
rtaArray.reverse();
// if (Array.isArray(rtaArray)) {
//   rtaArray.reverse();
// }
console.log('rtaArray','Kowany =>', rtaArray);
const rtaStr = parseStr(['K','o','w','a','n','y']);
// if (typeof rtaStr === 'string') {
  //   const minuscula = rtaStr.toLowerCase();
  //   console.log(minuscula);
  // }
  console.log('rtaString', "['K','o','w','a','n','y'] =>", rtaStr.toLowerCase());

  const rtaBool = parseStr(87);
  console.log('rtaBool','87 =>', rtaBool);
