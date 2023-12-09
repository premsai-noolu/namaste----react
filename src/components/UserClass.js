import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.name + "child Constructor");

    this.state = {
      userInfo: {
        login: "Dummy",
        id: "Default",
        avatar_url: "https://dummy-photo.com",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/premsai-noolu");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }
  render() {
    const { login, id, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {login}</h2>
        <h3>Id: {id}</h3>
        <h4>contact: premsainoolu01@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
