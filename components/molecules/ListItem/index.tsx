import * as React from "react";
import styled from "styled-components";

// components
import Headline2 from "../../atoms/Headline2";
import Headline3 from "../../atoms/Headline3";
import { View } from "react-native";

export interface Props {
  title: string;
  subtitle: string;
  user: string;
  limit: string;
}

const ListItemContainer = styled.View`
  padding-bottom: 7px;
  border-bottom-color: rgba(151, 151, 151, 0.3);
  border-bottom-width: 1px;
`;

const LightColorHeadline3 = styled(Headline3)`
  color: #9B9B9B;
`;

const TopContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const Image = styled.Image`
  width: 83px;
  height: 62px;
  resizeMode: cover;
  border-radius: 2px;
`;

const ListItem: React.StatelessComponent<Props> = ({
  title,
  subtitle,
  user,
  limit
}) => (
  <ListItemContainer>
    <TopContainer>
      <View>
        <Headline2>{title}</Headline2>
        <Headline2>{subtitle}</Headline2>
      </View>
      <Image source={require('./img/card-top.png')}/>
    </TopContainer>
    <Headline3>{user}</Headline3>
    <LightColorHeadline3>{limit}</LightColorHeadline3>
  </ListItemContainer>
);

export default ListItem;