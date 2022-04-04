// Nico => [N,i,c,o] => string => string[];
// [N,i,c,o] => Nico => [string] => string;

function parseString(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split(''); // string[]
  }
}


const rtaArray = parseString('Kowany');
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray','Kowany =>', rtaArray);
const rtaStr = parseString(['K','o','w','a','n','y']);
if (typeof rtaStr === 'string') {
  const minuscula = rtaStr.toLowerCase();
  console.log(minuscula);
  console.log('rtaString', "['K','o','w','a','n','y'] =>", rtaStr.toLowerCase());
}
