import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("Parent component did mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1 className="font-bold px-[666px] mt-6 text-lg">About Us</h1>
        <UserClass name={"First"} location={"Bangalore"} />
      </div>
    );
  }
}

export default About;
