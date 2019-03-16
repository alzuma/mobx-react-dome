import { IUser, UserAdapter } from "../adapters/UserAdapter";
import { observable, runInAction } from "mobx";

export class UserStore {
  private userAdapter: UserAdapter;
  @observable public users: IUser[] = [];

  constructor(userAdapter: UserAdapter) {
    this.userAdapter = userAdapter;
  }

  public fetchUsersAsync = async (): Promise<void> => {
    const users = await this.userAdapter.getUsersAsync();
    runInAction(() => {
      this.users = users;
    });
  };
}
