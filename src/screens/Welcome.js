/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';


export default class Welcome extends Component {

  _onPressButton=() => {
    this.props.navigation.navigate('PlayScreen')
  }
  render() {
    return (
      <View style={styles.container}>
        
        <View style = {styles.panlelTop}>
          <View style = {styles.bestScore}>
            <Text style = {styles.scoreText}>
              BEST: 20
            </Text>
          </View>
          <View style = {styles.yourscore}>
            <Text style = {styles.scoreText}>
              SCORE: 0
            </Text>
          </View>
        </View>

        <View style = {styles.panelCenter}>
          <TouchableHighlight onPress={this._onPressButton} underlayColor = "white">
              <Image
                style={styles.buttonPlay}
                source={require('./../res/play.png')}
              />
          </TouchableHighlight>
        </View>

        <View style = {styles.panelBottom}>
          <Text>Copyright (c) 2017 by Long - Hieu</Text>
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  panlelTop: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10
  },
  bestScore: {
    flex: 1,
    alignItems: 'flex-start',
  },
  yourscore: {
    flex: 1,
    alignItems: 'flex-end',
  },
  scoreText: {
    fontSize: 25
  },
  panelCenter: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonPlay: {
    width: 80,
    height: 80
  },
  panelBottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableHighlightButton: {
    alignItems: 'center',
    backgroundColor: 'white',
  }
});