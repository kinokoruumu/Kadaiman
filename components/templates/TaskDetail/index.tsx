import * as React from "react";
import styled from "styled-components";

// components
import Headline1 from "../../atoms/Headline1";
import CardItem, { Props as ICardItem } from "../../molecules/CardItem";
import ListItem, { Props as IListItem } from "../../molecules/ListItem";
import Headline3 from "../../atoms/Headline3";
import Body1 from "../../atoms/Body1";
import Button from "../../atoms/Button";
import { Actions } from "react-native-router-flux";

interface NearDeadlineTask extends ICardItem {}
interface Task extends IListItem {}

interface Props {
  nearDeadlineTasks: NearDeadlineTask[];
  tasks: Task[];
}

const Container = styled.SafeAreaView`
  flex: 1;
`;

const ScrollView = styled.ScrollView`
  background-color: #ffffff;
`;

const Image = styled.Image`
  width: 100%;
  height: 150px;
  margin-bottom: 34px;
  resizeMode: cover;
`;

const TitleDetail = styled.View`
  padding-left: 15px;
  padding-bottom: 25px;
`;

const ContentContainer = styled.View`
  padding: 0 15px;
`;

const FixedButton = styled(Button)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

const TaskDetailPageTemplate: React.StatelessComponent<Props> = ({
  nearDeadlineTasks,
  tasks
}) => {
  const onHandleTap = () => {
    Actions.submissionTask()
  };
  return (
    <Container>
      <ScrollView>
        <Image source={require("./img/card-top.png")} />
        <Headline1>SV42 - No.01</Headline1>
        <Headline1>環境構築とかなんとか</Headline1>
        <TitleDetail>
          <Headline3>教官　奥信 将人</Headline3>
          <Headline3>期限　5月7日 18時までに提出してください</Headline3>
          <Headline3>担当　大塚・西川</Headline3>
        </TitleDetail>
        <ContentContainer>
          <Body1>
            サンプルテキスト
            サンプルテキスト
            サンプルテキスト
            サンプルテキスト
            サンプルテキスト
            サンプルテキスト
            サンプルテキスト
            サンプルテキスト
            サンプルテキスト
            サンプルテキスト
          </Body1>
        </ContentContainer>
      </ScrollView>
      <FixedButton isFull onPress={onHandleTap}>課題の提出画面へ</FixedButton>
    </Container>
  );
}

export default TaskDetailPageTemplate;
