import React, { Component } from 'react'
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
      } else {
        this.setState({value: response})
      }
    })
  }
  render () {
    return (
      <div className='UnsubscribeNewsletter'>
        <section className='hero is-primary'>
          <div className='hero-body' style={{padding: '35px 20px'}}>
            <div className='container has-text-centered'>
              <p className='subtitle'>
                <strong>
                  {this.state.value
                  ? 'You have been unsubscribed of the newsletter'
                  : 'This email has already been unsubscribed'
                  }
                </strong>
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default UnsubscribeNewsletter

UnsubscribeNewsletter.propTypes = {
  match: React.PropTypes.object.isRequired
}
