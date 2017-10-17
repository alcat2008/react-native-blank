import React, { PureComponent } from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default class RoutePage extends PureComponent {
  render() {
    return (
      <View style={[styles.container]}>
        <Text>{this.props.label}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
