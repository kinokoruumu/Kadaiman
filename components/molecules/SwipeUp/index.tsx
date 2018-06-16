import * as React from "react";
import { Animated, Dimensions, PanResponder } from "react-native";
import styled from "styled-components";

const Image = styled.Image`
  width: 100%;
  height: 119px;
  background-color: rgba(0, 0, 0, 0.0);
`;

const Container = styled.View`
  position: absolute;
  top: 62px;
  width: 100%;
  height: 100%;
  background-color: #1F3A9D;
`;

const Text = styled.Text`
  font-size: 13px;
  font-weight: 400;
  font-family: "Hiragino Sans";
  color: #ffffff;
  text-align: center;
`;

interface Props {
  onReleased?: any;
}

export default class SwipeUp extends React.Component<Props> {
  private _panResponder;

  state = {
    height: new Animated.Value(119)
  };

  componentWillMount() {
    this.createPanResponder();
  }

  createPanResponder = () => {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState) => {
        return true
      },
      onMoveShouldSetPanResponder: (e, gestureState) => {
        return false
      },
      onPanResponderMove: (e, gestureState) => {
        this.state.height.setValue(119 + gestureState.dy * -1)
      },
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dy * -1 < Dimensions.get("window").height * 0.3) {
          Animated.spring(this.state.height, {
            toValue: 119,
            duration: 0,
            friction: 5
          }).start();
        } else {
          Animated.timing(this.state.height, {
            toValue: Dimensions.get("window").height,
            duration: 100
          }).start(() => this.props.onReleased ? this.props.onReleased() : null);
        }
      },
      onPanResponderTerminate: (e, gestureState) => {},
    });
  };

  render() {
    const wrapperStyle = {
      backgroundColor: "transparent",
      height: this.state.height
    };
    return (
      <Animated.View
        {...this._panResponder.panHandlers}
        style={wrapperStyle}
      >
        <Image source={require("./img/swipe.png")} />
        <Container>
          <Text>スライドして課題を提出</Text>
        </Container>
      </Animated.View>
    )
  }
};