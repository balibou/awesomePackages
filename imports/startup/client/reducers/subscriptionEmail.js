export default function subscriptionEmail (state = '', action = {}) {
  switch (action.type) {
    case 'SET_SUBSCRIPTION_EMAIL':
      return action.email
    default:
      return state
  }
}
