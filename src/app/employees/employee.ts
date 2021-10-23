export class Employee {

  constructor(id: number, first_name: string, last_name: string, avatar:string, email: string) {
    this.id = id;
    this.email = email;
    this.first_name = first_name;
    this.last_name = last_name;
    this.avatar = avatar;
    debugger;
  }

  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
