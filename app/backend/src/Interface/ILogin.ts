export interface ILogin {
  email: string,
  password: string,
}

export interface Id extends ILogin {
  id: number,
}
