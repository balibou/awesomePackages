import React, { Component } from 'react'
import { Container, Hero, HeroBody, Title } from 're-bulma'
import { deleteEmail } from '../../api/emails/methods'

class UnsubscribeNewsletter extends Component {
  constructor (props) {
    super(props)
    this.state = {value: ''}
  }

  componentWillMount () {
    const emailId = this.props.match.params.id
    deleteEmail.call({_id: emailId}, (error, response) => {
      if (error) {
        // console.log(error.reason)
      } else {
        this.setState({value: response})
      }
    })
  }
  render () {
    return (
      <div className='UnsubscribeNewsletter'>
        <Hero color='isPrimary'>
          <HeroBody>
            <Container hasTextCentered>
              <Title size='is4'>
                <strong>
                  {this.state.value
                  ? 'You have been unsubscribed of the newsletter'
                  : 'This email has already been unsubscribed'
                  }
                </strong>
              </Title>
            </Container>
          </HeroBody>
        </Hero>
      </div>
    )
  }
}

export default UnsubscribeNewsletter

UnsubscribeNewsletter.propTypes = {
  match: React.PropTypes.object.isRequired
}
