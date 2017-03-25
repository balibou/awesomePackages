/* global Meteor:true */
import React, { Component } from 'react'
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
    insertEmail.call({email}, (error, emailId) => {
      if (error) {
        // console.log(error.reason)
      } else {
        Meteor.call('sendEmail', email, emailId)
        this.setState({value: ''})
      }
    })
  }

  render () {
    return (
      <div className='SubscribeNewsletter'>
        <form
          onSubmit={this.submitEmail}>
          <input name='email' type='email' value={this.state.value} onChange={this.handleEmailChange} placeholder='Your email' />
          <button>Subscribe</button>
        </form>
      </div>
    )
  }
}

export default SubscribeNewsletter
