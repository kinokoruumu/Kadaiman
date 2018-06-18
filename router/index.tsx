import * as React from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components";
import { Router as RNRFRouter, Stack, Scene, Modal } from "react-native-router-flux";

// pages
import TopPage from "../components/pages/Top";
import TaskDetailPage from "../components/pages/TaskDetail";
import SubmissionTask from "../components/pages/SubmissionTask";

const Container = styled.View`
  flex: 1;
`;

const Router: React.StatelessComponent = () => (
  <Container>
    <RNRFRouter
      navigationBarStyle={styles.navigationBarStyle}
      titleStyle={styles.titleStyle}
    >
      <Modal key="modal" hideNavBar>
        <Stack key="main">
          <Scene key="home" component={TopPage} title="KADAIMAN"/>
          <Scene key="detail" component={TaskDetailPage} title={undefined}/>
        </Stack>
        <Scene key="submissionTask" component={SubmissionTask} initial/>
      </Modal>
    </RNRFRouter>
  </Container>
);

const styles = StyleSheet.create({
  navigationBarStyle: {
    backgroundColor: "#ffffff"
  },
  titleStyle: {
    color: "#000000",
    fontFamily: "marion-bold"
  }
});

export default Router;
