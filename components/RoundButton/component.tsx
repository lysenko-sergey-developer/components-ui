import React from "react";
import styled from "styled-components";
import { Transition } from "react-transition-group";

interface IRoundButton {
  pushed: boolean;
  fadeState: "entering" | "entered" | "exiting" | "exited";
}
const RoundButton = styled.button<IRoundButton>`
  border-radius: 50%;
  height: 150px;
  width: 150px;
  background: linear-gradient(#6739a8, #7e53b5);
  box-shadow: 2px 2px 10px 2px #4d4d4d;
  color: #f1f0f2;
  padding-top: 25%;
  font-size: 100%;
  position: relative;
  margin-left: 5px;
  margin-top: 5px;
  border: 2px solid #7e53b5;
  outline: none;
  transition: 300ms;

  ${({ pushed }) => {
    return (
      pushed &&
      `
      background: red;
      box-shadow: inset 0 0 10px #4d4d4d;
      background: linear-gradient(#6739a8, #7e53b5);
      border: 2px solid #6739a8;
    `
    );
  }}

  &:before {
    content: "";
    background: red;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    top: 0%;
    right: 0%;
    opacity: 0.2;
    position: absolute;
    background: linear-gradient(#4c3b63, #bb95ed);
    z-index: 1;
    transition: 300ms;

    ${({ pushed }) => {
      return (
        pushed &&
        `
        background: red;
        box-shadow: 0 0 10px #4d4d4d;
        background: linear-gradient(#6739a8, #7e53b5);
      `
      );
    }}
  }

  &:after {
    content: "";
    width: 20%;
    height: 4%;
    border-radius: 35%;
    top: 23%;
    right: 39.5%;
    position: absolute;
    z-index: 2;
    transition: 300ms;

    background: linear-gradient(#ffff00, #ffff00);
    opacity: 0.5;
    border-bottom: 10% solid #faea3c;
    border-left: 10% solid #faea3c;
    border-right: 10% solid #faea3c;
    box-shadow: 0 0.5px 15px 8px #ffff00;

    ${({ pushed }) => {
      return (
        pushed &&
        `
        opacity: 0.5;
        background: linear-gradient(#382770, #2c1d5c);
        border-bottom: 1px solid #413175;
        border-left: 1px solid #413175;
        border-right: 1px solid #413175;
        box-shadow: 0 0 4px 1px #4d4d4d;
      `
      );
    }}
  }
`;

const Panel1 = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: #6739a8;
`;

const Panel2 = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: #6739a8;
  padding-left: calc(10px / 2);
  padding-top: calc(10px / 2);
`;

const RoundButtonComponent = () => {
  const [pushed, setPushed] = React.useState(false);
  const text = pushed ? "STOP" : "START";
  return (
    <Panel1>
      <Panel2>
        <Transition in={pushed} timeout={300}>
          {fadeState => (
            // TODO: Implement animation with fadeState
            <RoundButton
              onMouseUp={() => setPushed(false)}
              onMouseDown={() => setPushed(true)}
              pushed={pushed}
              fadeState={fadeState}
            >
              {text}
            </RoundButton>
          )}
        </Transition>
      </Panel2>
    </Panel1>
  );
};

export { RoundButtonComponent };
