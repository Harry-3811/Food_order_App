import User from "./User";
import UserClass from "../components/UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name={"Hari Krishna (class)"} location={"AP"} />
      </div>
    );
  }
}

export default About;
