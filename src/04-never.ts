// never type se utiliza para funciones que se sabe que nunca
// van a terminar o bien, detienen la ejecución del programa,
// como es el caso en el que usamos throw new Error(message);
// No hay que confundirlo con void, este último no retorna nada.

const withoutEnd = () => {
  while ( true ) {
    console.log('nunca deberías para de aprender');
  }
}

const fail = (message: string) => {
  throw new Error(message);
}
const example = (input: unknown) => {
  if (typeof input === 'string') {
    return 'Es un string';
  } else if (Array.isArray(input)) {
    return 'is un array'
  }
  return fail('not match!!!!!!!!!');
}

console.log(example('Hola'));
console.log(example([1,23,3,4]));
console.log(example(55877)); //detiene
console.log(example('Hola después de fail'));

