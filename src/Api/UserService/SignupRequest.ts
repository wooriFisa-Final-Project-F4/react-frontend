class SignupRequest {
  username: string;
  gender: string;
  birth: string;
  address: string;
  email: string;
  password: string;
  phoneNumber: string;

  constructor(
    username: string,
    gender: string,
    birth: string,
    address: string,
    email: string,
    password: string,
    phoneNumber: string
  ) {
    this.username = username;
    this.gender = gender;
    this.birth = birth;
    this.address = address;
    this.email = email;
    this.password = password;
    this.phoneNumber = phoneNumber;
  }
}

export default SignupRequest;
