export interface IUser {
  id: number;
  name: string;
  userName: string;
  email: string;
}

export class UserAdapter {
  public getUsersAsync = (): Promise<IUser[]> => {
    return fetch("https://jsonplaceholder.typicode.com/users").then(r =>
      r.json()
    );
  };
}
