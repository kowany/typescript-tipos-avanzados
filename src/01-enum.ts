// Una de las ventajas de enum es la forma directa de saber
// cuáles son las opciones que puedo asignarle a una variable

export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

export type User = {
  username: string,
  role: ROLES
}

const kowanyUser: User = {
  username: 'kowany',
  role: ROLES.ADMIN
}


