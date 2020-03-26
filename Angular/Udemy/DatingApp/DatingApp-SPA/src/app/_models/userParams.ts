export interface IUserParams {
  gender: string;
  minAge: number;
  maxAge: number;
  orderBy: string;
}
export class UserParams implements IUserParams {
  gender: "male";
  minAge: 18;
  maxAge: 99;
  orderBy: "lastActive";
}
