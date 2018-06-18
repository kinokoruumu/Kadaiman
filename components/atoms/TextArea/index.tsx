import * as React from "react";
import styled from "styled-components";

const TextInput = styled.TextInput`
  font-size: 15px;
  font-weight: 300;
  font-family: "Hiragino Sans";
  line-height: 20px;
`;

interface Props {
  placeholder?: string;
}

const TextArea: React.StatelessComponent<Props> = ({
  placeholder
}) => (
  <TextInput
    placeholder={placeholder}
    placeholderColor="#9B9B9B"
    multiline
    numberOfLines={6}
  />
);

export default TextArea;
