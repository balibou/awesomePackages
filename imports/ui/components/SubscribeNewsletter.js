/* global Meteor:true */
import React, { Component } from 'react'
import { Bert } from 'meteor/themeteorchef:bert'
import { insertEmail } from '../../api/emails/methods'

class SubscribeNewsletter extends Component {
  constructor (props) {
    super(props)
    this.submitEmail = this.submitEmail.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.state = {value: ''}
  }

  handleEmailChange (event) {
    this.setState({value: event.target.value})
  }

  submitEmail (e) {
    e.preventDefault()
    const email = this.state.value
    if (!email) return Bert.alert('No email in the input field', 'warning')
    insertEmail.call({email}, (error, emailId) => {
      if (error) {
        Bert.alert(error.reason, 'danger')
      } else {
        Meteor.call('sendEmail', email, emailId)
        Bert.alert('Your email is subscribed !', 'success')
        this.setState({value: ''})
      }
    })
  }

  render () {
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
                        <input className='input is-flat required email' name='email' type='email' placeholder='email address' value={this.state.value} onChange={this.handleEmailChange} required />
                        <span className='icon is-small'>
                          <i className='fa fa-envelope' />
                        </span>
                      </div>
                      <div className='control'>
                        <input className='button is-white is-outlined' type='submit' value='Subscribe' name='subscribe' />
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

export default SubscribeNewsletter
