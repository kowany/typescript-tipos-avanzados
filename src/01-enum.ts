enum ROLES {
  ADMIN: 'admin',
  SELLER: 'seller',
  CUSTOMER: 'customer'
}

type User = {
  username: string,
  role: ROLES
}

const kowanyUser: User = {
  username: 'kowany',
  role: ROLES.ADMIN
}


