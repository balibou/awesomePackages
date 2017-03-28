/* global Meteor:true */
import React, { Component } from 'react'
import { Bert } from 'meteor/themeteorchef:bert'
import { connect } from 'react-redux'
import { insertEmail } from '../../api/emails/methods'
import setSubscriptionEmail from '../../startup/client/actions/setSubscriptionEmail'

class SubscribeNewsletter extends Component {
  constructor (props) {
    super(props)
    this.submitEmail = this.submitEmail.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
  }

  handleEmailChange (event) {
    const {dispatch} = this.props
    dispatch(setSubscriptionEmail(event.target.value))
  }

  submitEmail (e) {
    e.preventDefault()
    const { subscriptionEmail, dispatch } = this.props
    insertEmail.call({email: subscriptionEmail}, (error, emailId) => {
      if (error) {
        Bert.alert(error.reason, 'danger')
      } else {
        Meteor.call('sendEmail', subscriptionEmail, emailId)
        Bert.alert('Your email is subscribed !', 'success')
        dispatch(setSubscriptionEmail(''))
      }
    })
  }

  render () {
    const { subscriptionEmail } = this.props
    return (
      <div className='SubscribeNewsletter'>
        <section className='hero is-primary'>
          <div className='hero-body' style={{padding: '35px 20px'}}>
            <div className='container'>
              <div className='columns'>
                <div className='column is-one-third is-left'>
                  <p className='title'>
                    Awesome <strong>Newsletter</strong> !
                  </p>
                </div>
                <div className='column'>
                  <form onSubmit={this.submitEmail}>
                    <div className='field is-grouped'>
                      <div className='control has-icon is-expanded'>
                        <input
                          className='input is-flat required email'
                          name='email' type='email'
                          placeholder='email address'
                          value={subscriptionEmail}
                          onChange={this.handleEmailChange}
                          required />
                        <span className='icon is-small'>
                          <i className='fa fa-envelope' />
                        </span>
                      </div>
                      <div className='control'>
                        <input
                          className='button is-white is-outlined'
                          type='submit'
                          value='Subscribe'
                          name='subscribe' />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

SubscribeNewsletter.propTypes = {
  dispatch: React.PropTypes.func,
  subscriptionEmail: React.PropTypes.string
}

function mapStateToProps (state) {
  return {
    subscriptionEmail: state.subscriptionEmail
  }
}

export default connect(mapStateToProps)(SubscribeNewsletter)
