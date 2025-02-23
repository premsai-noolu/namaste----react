import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "ga",
  setUserName: () => {},
});

export default UserContext;
