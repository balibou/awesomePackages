/* global Meteor:true */
import React, { Component } from 'react'
import { Bert } from 'meteor/themeteorchef:bert'
import { Container, Hero, HeroBody, Columns, Column, Title, Group, Button, Input } from 're-bulma'
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
        <Hero color='isPrimary'>
          <HeroBody>
            <Container>
              <Columns>
                <Column size='isOneThird'>
                  <Title size='is3'>Awesome <strong>Newsletter</strong> !</Title>
                </Column>
                <Column>
                  <form onSubmit={this.submitEmail}>
                    <Group>
                      <Input name='email' type='email' value={this.state.value} onChange={this.handleEmailChange} placeholder='email address' isExpanded />
                      <Button type='submit' color='isWhite' buttonStyle='isOutlined'>Subscribe</Button>
                    </Group>
                  </form>
                </Column>
              </Columns>
            </Container>
          </HeroBody>
        </Hero>
      </div>
    )
  }
}

export default SubscribeNewsletter
