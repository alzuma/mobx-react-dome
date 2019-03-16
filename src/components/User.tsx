import * as React from "react";

interface IUserProps {
  name: string;
}

export class User extends React.Component<IUserProps> {
  public render() {
    return <li>{this.props.name}</li>;
  }
}
