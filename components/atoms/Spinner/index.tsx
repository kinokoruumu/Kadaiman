import * as React from "react";
import styled from "styled-components";
import { Svg } from "expo";

const Image = styled.Image`
  width: 50px;
  height: 50px;
`;

const Spinner: React.StatelessComponent = ({}) => (
  <Svg
    width={50}
    height={50}
  >
    <Image source={require("./img/spinner.svg")} />
  </Svg>
);

export default Spinner;
