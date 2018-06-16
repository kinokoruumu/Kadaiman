import * as React from "react";
import styled from "styled-components";

// components
import Headline1 from "../../atoms/Headline1";
import CardItem, { Props as ICardItem } from "../../molecules/CardItem";
import ListItem, { Props as IListItem } from "../../molecules/ListItem/index";

interface NearDeadlineTask extends ICardItem {}
interface Task extends IListItem {}

interface Props {
  nearDeadlineTasks: NearDeadlineTask[];
  tasks: Task[];
}

const Container = styled.ScrollView`
  padding-top: 40px;
  background-color: #ffffff;
`;

const ScrollView = styled.ScrollView`
  padding-bottom: 55px;
`;

const CardItemsContainer = styled.View`
  flex-direction: row;
  padding-left: 15px;
`;

const CardItemContainer = styled.View`
  padding-right: 16px;
`;

const ListItemsContainer = styled.View`
  padding: 0 15px;
`;

const ListItemContainer = styled.View`
  margin-bottom: 10px;
`;

const TopPageTemplate: React.StatelessComponent<Props> = ({
  nearDeadlineTasks,
  tasks
}) => (
  <Container>
    <Headline1>提出期限が近づいています</Headline1>
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <CardItemsContainer>
        {nearDeadlineTasks.map((nearDeadlineTask, index) => (
          <CardItemContainer key={`nearDeadlineTasks-index-${index}`}>
            <CardItem {...nearDeadlineTask} />
          </CardItemContainer>
        ))}
      </CardItemsContainer>
    </ScrollView>

    <Headline1>未完了の課題</Headline1>
    <ListItemsContainer>
      {tasks.map((task, index) => (
        <ListItemContainer key={`task-index-${index}`}>
          <ListItem {...task} />
        </ListItemContainer>
      ))}
    </ListItemsContainer>
  </Container>
);

export default TopPageTemplate;
