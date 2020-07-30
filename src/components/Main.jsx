import React, { useState } from "react";
import styled from "styled-components";
import { Jumbotron, Button, InputGroup, FormControl } from "react-bootstrap";
import Background from "../assets/road.jpg";
import Alert from "./Alert";

const MyJumbotron = styled(Jumbotron)`
  width: 95%;
  box-shadow: 3px 3px 3px black;
  margin: 60px auto;
`;

const Container = styled.div`
  border-radius: 10px;
  width: 100%;
  border: 3px solid white;
  background-image: url(${Background});
  background-position: center;
  background-size: cover;
  margin: 0px auto;
`;
export default function Main() {
  const [show, setShow] = useState(false);

  const [banner, setBanner] = useState(false);

  const showInput = () => {
    setShow(!show);
  };

  const [state, setState] = useState([]);

  return (
    <Container>
      <MyJumbotron>
        <h1>Hello, and welcome to my Todo app!</h1>
        <p>This todo app was built using react and bootstrap.</p>
        <p>You can easily create, delete and view your todos for the day.</p>
        <Button variant="primary" onClick={showInput}>
          add todo
        </Button>
        {show ? (
          <InputGroup
            className="mb-3"
            style={{ width: "100%", marginTop: "50px" }}
          >
            <FormControl
              placeholder="Add todo..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
            />
            <InputGroup.Append>
              <Button
                variant="outline-secondary"
                onClick={() => {
                  localStorage.setItem(state, state);
                  setBanner(true);
                  window.location.reload();
                }}
              >
                add
              </Button>
            </InputGroup.Append>
          </InputGroup>
        ) : null}
        {banner ? <Alert /> : null}
      </MyJumbotron>
    </Container>
  );
}
