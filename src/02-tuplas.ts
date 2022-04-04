const prices: (number | string)[] = [1,2,3,4,5, 'abc'];

prices.push(1);
prices.push('nic');

// las tuplas es fuertemente tipado y toma en cuenta la
// posición y el número de elementos en el array (tupla)
let user: [string, number, boolean];
user = ['kowany', 23, true];

// Con las tuplas podemos hacer destructuración

const [username, age] = user;
console.log( username );
console.log( age );
