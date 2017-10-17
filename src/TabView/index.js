import React, { PureComponent } from 'react'
import { StyleSheet } from 'react-native'
import { TabViewAnimated, TabBar } from 'react-native-tab-view'
import RoutePage from './RoutePage'

export default class TabViewExample extends PureComponent {
  static navigationOptions = {
    title: 'TabView',
  };

  state = {
    index: 2,
    routes: [
      { key: '1', title: 'First' },
      { key: '2', title: 'Second' },
      { key: '3', title: 'Third' },
      { key: '4', title: 'Fourth' },
      { key: '5', title: 'Fifth' },
      { key: '6', title: 'Sixth' },
      { key: '7', title: 'Senventh' },
      { key: '8', title: 'Eighth' },
      { key: '9', title: 'Nineth' },
      { key: '10', title: 'Tenth' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderHeader = props => {
    return (
      <TabBar
        {...props}
        scrollEnabled={true}
      />
    )
  }

  // _renderScene = SceneMap({
  //   '1': () => <RoutePage label='1' />,
  //   '2': () => <RoutePage label='2' />,
  //   '3': () => <RoutePage label='3' />,
  //   '4': () => <RoutePage label='4' />,
  //   '5': () => <RoutePage label='5' />,
  //   '6': () => <RoutePage label='6' />,
  //   '7': () => <RoutePage label='6' />,
  //   '8': () => <RoutePage label='6' />,
  //   '9': () => <RoutePage label='6' />,
  //   '10': () => <RoutePage label='6' />,
  // });

  _renderScene = ({ route }) => {
    if (Math.abs(this.state.index - this.state.routes.indexOf(route)) > 2) {
      return null
    }

    return (
      <RoutePage label={route.title} />
    )
  };

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onIndexChange={this._handleIndexChange}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: 'yellow',
  },
})
