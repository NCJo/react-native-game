
import React, {Component} from 'react';
import {Platform, StyleSheet, StatusBar} from 'react-native';

import Matter from "matter-js"
import { GameEngine } from "react-native-game-engine";

export default class App extends Component {
  render() {
    const { width, height } = Dimensions.get("screen");
    const boxSize = Math.trunc(Math.max(width, height) * 0.075);
    const initialBox = Matter.Bodies.rectangle(width / 2, height / 2, boxSize, boxSize);

    <GameEngine style={StyleSheet.container}>
      <StatusBar hidden={true} />
    </GameEngine>
  }
}

const styles = Styles.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
});