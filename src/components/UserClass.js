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
      <div className="w-[1200px] p-10 m-auto mt-10 flex flex-row justify-between bg-gray-100 rounded-lg">
        <div className="w-[800px]">
          <img className="w-auto mt-2 ml-4 rounded-lg mb-1" src={avatar_url} />
          <h1 className="font-bold ml-10"> Founder </h1>
          <div className="pl-2">
            <h2 className="">
              <b>Name: </b> {login}
            </h2>

            <h4>
              <b>contact: </b>8688931320
            </h4>
          </div>
        </div>
        <div>
          <h2 className="px-3 ml-10">
            Welcome to <b>Foodify</b>, your passport to culinary exploration!
            Discover a world of flavors with our curated restaurant selection.
            Effortlessly reserve tables, explore diverse cuisines, and savor
            exclusive offers. We're here to redefine your dining experience –
            easy, exciting, and tailored just for you. Download Foodify now and
            let the gastronomic journey begin!.At Foodify, we believe that
            dining out should be a delightful adventure, and our platform is
            designed to make that happen. Whether you're craving international
            flavors, local delicacies, or trendy fusion dishes, our app connects
            you with a diverse array of restaurants to satisfy every palate.
          </h2>
          <button className="p-3 ml-12 mt-6 bg-red-400 text-white rounded-lg">
            Lets Explore
          </button>
        </div>
      </div>
    );
  }
}

export default UserClass;
