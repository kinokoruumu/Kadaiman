import * as React from "react";
import styled from "styled-components";

// components
import CheckBox from "../../atoms/CheckBox";
import Body1 from "../../atoms/Body1";

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-bottom: 15px;
`;

const TextContainer = styled.View`
  margin-top: 6px;
  padding-left: 16px;
`;

class CheckBoxField extends React.Component {
  state = {
    checked: false
  };
  onHandleTap = () => {
    const { checked } = this.state;
    this.setState({
      checked: !checked
    })
  };
  render() {
    const { children } = this.props;
    const { checked } = this.state;
    return (
      <Container onPress={this.onHandleTap} activeOpacity={1}>
        <CheckBox checked={checked}/>
        <TextContainer>
          <Body1>{children}</Body1>
        </TextContainer>
      </Container>
    );
  }
}

export default CheckBoxField;
