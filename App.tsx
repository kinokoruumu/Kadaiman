import * as React from "react";
import { Font } from "expo";

// router
import Router from "./router";
import { View } from "react-native";

export default class App extends React.Component<{}> {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      "marion-bold": require("./assets/fonts/Marion-Bold.ttf")
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;
    return (
      <View style={{ flex: 1 }}>
        {
          fontLoaded ? (
            <Router/>
          ) : null
        }
      </View>
    )
  }
}
