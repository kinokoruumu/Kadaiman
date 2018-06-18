import * as React from "react";
import styled from "styled-components";
import { Actions } from "react-native-router-flux";
import { ActivityIndicator } from "react-native";

// components
import { StatusBar } from "react-native";
import Headline1 from "../../atoms/Headline1";
import Headline2 from "../../atoms/Headline2";
import SwipeUp from "../../molecules/SwipeUp";
import CheckBoxField from "../../molecules/CheckBoxField";
import TextArea from "../../atoms/TextArea";
import Times from "../../atoms/Times";

const Container = styled.View`
  flex: 1;
  padding-top: 44px;
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

const CheckListContainer = styled.View`
  padding: 15px;
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

const SuccessText = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;

const LightColorHeadline2 = styled(Headline2)`
  padding-bottom: 15px;
  color: #9B9B9B;
`;

interface Props {
  title: string;
  subtitle: string;
  user: string;
  limit: string;
  checkList: string[];
}

class SubmissionTaskPageTemplate extends React.Component<Props> {
  state = {
    isLoading: false,
    success: false
  };

  onHandleRelease = () => {
    this.setState({
      isLoading: true
    })
    setTimeout(() => {
      this.setState({
        isLoading: false,
        success: true
      })
      setTimeout(() => {
        Actions.pop()
      }, 600)
    }, 1000)
  };

  render() {
    const { title, subtitle, user, limit, checkList } = this.props.task;
    const { isLoading, success } = this.state;
    return (
      <Container>
        <StatusBar barStyle='dark-content'/>
        <Times/>
        <ScrollView>
          <Image source={require("./img/card-top.png")} />
          <Headline1>{ title }</Headline1>
          <Headline1>{ subtitle }</Headline1>
          <CheckListContainer>
            <LightColorHeadline2>CHECK LIST</LightColorHeadline2>
            { checkList.map((list, index) => <CheckBoxField key={`check-list-index-${index}`}>{ list }</CheckBoxField>) }
            <TextArea placeholder="コメント(任意)"/>
          </CheckListContainer>
        </ScrollView>
        <SwipeUp onReleased={this.onHandleRelease} />
        {
          isLoading &&
          <LoadingContainer>
            <ActivityIndicator size="large" color="#ffffff"/>
          </LoadingContainer>
        }
        {
          success &&
          <LoadingContainer>
            <SuccessText>提出が完了しました</SuccessText>
          </LoadingContainer>
        }
      </Container>
    );
  }
}

export default SubmissionTaskPageTemplate;
