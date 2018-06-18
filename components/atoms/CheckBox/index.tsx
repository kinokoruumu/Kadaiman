import * as React from "react";
import styled from "styled-components";

interface Props {
  checked?: boolean;
}

const Container = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border-width: 1px;
  border-color: #979797;
  justify-content: center;
	align-items: center;
`;

const Image = styled.Image`
  width: 15px;
  height: 15px;
  resizeMode: cover;
`;

const CheckBox: React.StatelessComponent<Props> = ({
  checked
}) => (
  <Container>
    { checked && <Image source={require("./img/check.png")}/>}
  </Container>
);

export default CheckBox;
