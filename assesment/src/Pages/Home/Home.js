import React, { useState } from "react";

import { Button } from "react-bootstrap";

import Text from "../../Components/Text/Text";
import RedRectangle from "../../Components/RedRectangle/RedRectangle";

import "./Home.scss";

const Home = () => {
  const [background, setBackground] = useState("red");
  const [show, setShow] = useState(false);

  const handleChange = (eh) => {
    eh.preventDefault();
    setShow(true);
    setBackground("green");
  };
  return (
    <div className="Home">
      <Text />
      <RedRectangle background={background} />
      <Button className="mt-5" variant="danger" onClick={handleChange}>
        Click Me
      </Button>
      {show && <span className="mt-4">Botton clicked</span>}
      <p className="mt-5">
        I am not using Context api or redux to managing the state, if it is
        necessary then I will obviously use any of them as per requirment.
      </p>
    </div>
  );
};

export default Home;
