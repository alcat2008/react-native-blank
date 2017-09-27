import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

class RNBlank extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          I'm RNBlank!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
})

export default RNBlank
