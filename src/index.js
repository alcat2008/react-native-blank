import {
  StackNavigator,
} from 'react-navigation'
import Home from './Home'
import TabView from './TabView'
import Modal from './Modal'

const RNBlank = StackNavigator({
  Home: { screen: Home },
  TabView: { screen: TabView },
  Modal: { screen: Modal },
})

export default RNBlank
