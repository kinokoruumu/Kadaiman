import * as React from "react";
import styled from "styled-components";
import { Actions } from "react-native-router-flux";
import { ActivityIndicator } from "react-native";

// components
import { StatusBar } from "react-native";
import Headline1 from "../../atoms/Headline1";
import SwipeUp from "../../molecules/SwipeUp";

const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

const ScrollView = styled.ScrollView`
  background-color: #ffffff;
`;

const Image = styled.Image`
  width: 100%;
  height: 200px;
  margin-bottom: 34px;
  resizeMode: cover;
`;

const LoadingContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #1F3A9D;
  justify-content: center;
  align-items: center;
`;

class SubmissionTaskPageTemplate extends React.Component {
  state = {
    isLoading: false
  };

  onHandleRelease = () => {
    this.setState({
      isLoading: true
    })
    setTimeout(() => {
      Actions.pop()
    }, 1000)
  };

  render() {
    const { isLoading } = this.state;
    return (
      <Container>
        <StatusBar barStyle='dark-content'/>
        <ScrollView>
          <Image source={require("./img/card-top.png")} />
          <Headline1>SV42 - No.01</Headline1>
          <Headline1>環境構築とかなんとか</Headline1>
        </ScrollView>
        <SwipeUp onReleased={this.onHandleRelease} />

        {
          isLoading &&
          <LoadingContainer>
            <ActivityIndicator size="large" color="#ffffff"/>
          </LoadingContainer>
        }
      </Container>
    );
  }
}

export default SubmissionTaskPageTemplate;
