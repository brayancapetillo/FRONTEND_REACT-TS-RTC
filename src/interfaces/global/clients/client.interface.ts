export interface Client {
  user: User;
  Score: number;
  Country: string;
  Status: boolean;
  id: string;
}

export interface User {
  name: string;
  avatar: string;
}
