export class User {
  username: string;
  password: string;
  email: string;
  id?: number;

  constructor(username: string, password: string, email: string, id?: number) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.id = id;
  }

  public prettyPrint() {
    console.log('username => ', this.username);
  }
}
