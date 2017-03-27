import AppNavigation from '../components/AppNavigation'
import {createContainer} from 'meteor/react-meteor-data'
import {Meteor} from 'meteor/meteor'

export default createContainer(() => {
  const userData = Meteor.subscribe('userData')
  const user = Meteor.user()
  return {
    userReady: user && userData.ready()
  }
}, AppNavigation)
