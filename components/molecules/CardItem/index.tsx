import * as React from "react";
import { View, Text, Image } from "react-native";
import styled from "styled-components";

// components
import Headline2 from "../../atoms/Headline2";
import Headline3 from "../../atoms/Headline3";

export interface Props {
  title: string;
  subtitle: string;
  user: string;
  limit: string;
  remaining: number;
}

const CardShadowContainer = styled.View`
  width: 312px;
  height: 188px;
  box-shadow: 3px 5px 8px rgba(0, 0, 0, 0.15);
`;

const CardContainer = styled.View`
  width: 100%;
  height: 188px;
  background-color: #ffffff;
  border-radius: 5px;
  overflow: hidden;
`;

const TopContainer = styled.View`
  width: 100%;
  height: 70px;
  overflow: hidden;
`;

const Image = styled.Image`
  flex: 1;
  resizeMode: cover;
`

const BottomContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: 15px;
`;

const LimitContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

const LightColorHeadline3 = styled(Headline3)`
  color: #9B9B9B;
`;

const CardItem: React.StatelessComponent<Props> = ({
  title,
  subtitle,
  user,
  limit,
  remaining
}) => (
  <CardShadowContainer>
    <CardContainer>
      <TopContainer>
        <Image source={require('./img/card-top.png')}/>
      </TopContainer>
      <BottomContainer>
        <View>
          <Headline2>{title}</Headline2>
          <Headline2>{subtitle}</Headline2>
        </View>
        <LimitContainer>
          <View>
            <Headline3>{user}</Headline3>
            <LightColorHeadline3>{limit}</LightColorHeadline3>
          </View>
          <Headline2>{`残り${remaining}日`}</Headline2>
        </LimitContainer>
      </BottomContainer>
    </CardContainer>
  </CardShadowContainer>
);

export default CardItem