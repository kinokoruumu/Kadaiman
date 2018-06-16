import * as React from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { Router as RNRFRouter, Stack, Scene, Modal } from "react-native-router-flux";

// pages
import TopPage from "../components/pages/Top";
import TaskDetailPage from "../components/pages/TaskDetail";
import SubmissionTask from "../components/pages/SubmissionTask";

const Router: React.StatelessComponent = () => (
  <View style={styles.container}>
    <RNRFRouter
      navigationBarStyle={styles.navigationBarStyle}
      titleStyle={styles.titleStyle}
    >
      <Modal key="modal" hideNavBar>
        <Stack key="main">
          <Scene key="home" component={TopPage} title="KADAIMAN"/>
          <Scene key="detail" component={TaskDetailPage} title={undefined}/>
        </Stack>
        <Scene key="submissionTask" component={SubmissionTask}/>
      </Modal>
    </RNRFRouter>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  navigationBarStyle: {
    backgroundColor: "#ffffff"
  },
  titleStyle: {
    color: "#000000",
    fontFamily: "marion-bold"
  }
});

export default Router;
