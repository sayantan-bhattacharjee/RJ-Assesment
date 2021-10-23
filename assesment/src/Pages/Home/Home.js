import React, { Component } from "react";

import { Button } from "react-bootstrap";

import Text from "../../Components/Text/Text";
import RedRectangle from "../../Components/RedRectangle/RedRectangle";

import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Text />
        <RedRectangle />
        <Button className="mt-5" variant="danger">
          Click Me
        </Button>
      </div>
    );
  }
}

export default Home;
