import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
} from 'react-native'

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          I'm RNBlank!
        </Text>
        <Button
          title='Go to TabView'
          onPress={() =>
            navigate('TabView', { name: 'TabView' })
          }
        />
        <Button
          title='Go to Modal'
          onPress={() =>
            navigate('Modal', { name: 'Modal' })
          }
        />
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

export default Home
