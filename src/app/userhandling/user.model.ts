export class User {
  public fullName: string;
  public nickName: string;
  public password: string;
  public gender: string;
  public description: string;
  public image: string;
  public email: string;
  public birthDate: string;

  constructor(fullName: string, nickName: string, password: string, gender: string, description: string, image: string, email: string, birthDate: string) {
    this.fullName = fullName;
    this.nickName = nickName;
    this.password = password;
    this.gender = gender;
    this.description = description;
    this.image = image;
    this.email = email;
    this.birthDate = birthDate;
  }

}
