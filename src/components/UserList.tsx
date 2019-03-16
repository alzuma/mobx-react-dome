import * as React from "react";
import { UserStore } from "../store/UserStore";
import { inject, observer } from "mobx-react";
import { User } from "./User";

interface IUserListProps {
  userStore?: UserStore;
}

@inject("userStore")
@observer
export class UserList extends React.Component<IUserListProps> {
  public render(): React.ReactNode {
    const { userStore } = this.props;

    return (
      <ul>
        {userStore.users.map(_ => {
          return <User name={_.name} />;
        })}
      </ul>
    );
  }
}
