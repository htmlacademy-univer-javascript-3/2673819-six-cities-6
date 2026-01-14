export type UserProps = {
  isPro: boolean;
  name: string;
  avatarUrl: string;
  email: string;
  token: string;
}

export type UserLoginProps = {
  email: string;
  password: string;
}
