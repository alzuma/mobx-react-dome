import * as React from "react";
import { IUser } from "../adapters/UserAdapter";

interface IUserProps {
  user: IUser;
}

export class User extends React.Component<IUserProps> {
  public render() {
    const { user } = this.props;
    return <li>{user.name}</li>;
  }
}
