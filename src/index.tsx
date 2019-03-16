import { Dashboard } from "./components/Dashboard";
import * as ReactDOM from "react-dom";
import * as React from "react";
import { UserStore } from "./store/UserStore";
import { UserAdapter } from "./adapters/UserAdapter";
import { Provider } from "mobx-react";
import DevTools from "mobx-react-devtools";

const userStore = new UserStore(new UserAdapter());
setTimeout(() => userStore.fetchUsersAsync());

const renderer = () => {
  return (
    <Provider userStore={userStore}>
      <div>
        <Dashboard />
        <DevTools />
      </div>
    </Provider>
  );
};

ReactDOM.render(renderer(), document.getElementById("app"));
