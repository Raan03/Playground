export interface IUserParams {
  gender: string;
  minAge: number;
  maxAge: number;
}
export class UserParams implements IUserParams {
  gender: "male";
  minAge: 18;
  maxAge: 99;
}
