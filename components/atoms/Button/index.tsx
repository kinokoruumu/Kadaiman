import * as React from "react";
import styled from "styled-components";

const NormalButton = styled.TouchableOpacity`
  width: 200px;
  padding: 15px 0 14px;
  background-color: #1F3A9D;
`;

const FullButton = styled.TouchableOpacity`
  width: 100%;
  padding: 15px 0 14px;
  background-color: #1F3A9D;
`;

const ButtonText = styled.Text`
  font-size: 13px;
  font-weight: 400;
  font-family: "Hiragino Sans";
  color: #ffffff;
  text-align: center;
`;

interface Props {
  isFull?: boolean;
  onPress?: () => void;
}

const Button: React.StatelessComponent<Props> = ({
  isFull,
  children,
  onPress
}) => {
  const Component = isFull ? FullButton : NormalButton
  return (
    <Component onPress={onPress}>
      <ButtonText>{ children }</ButtonText>
    </Component>
  );
}

export default Button