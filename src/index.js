import React from "react";
import ReactDom from "react-dom";
import CommentDetail from "./components/ComponentDetail/CommentDetail";
import UserService from "./services/UserService";

const App = () => {
  console.log("users", JSON.stringify(UserService.getUsers()));
  const users = UserService.getUsers();
  return (
    <div className="ui container comments">
      <div className="ui container comments">
        {users.map((user) => (
          <CommentDetail key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector("#root"));
