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
        // console.log(error.reason)
      } else {
        this.setState({value: response})
      }
    })
  }
  render () {
    return (
      <div className='UnsubscribeNewsletter'>
        {this.state.value
        ? <p>You have been unsubscribed of the newsletter</p>
        : <p>This email has already been unsubscribed</p>
        }
      </div>
    )
  }
}

export default UnsubscribeNewsletter

UnsubscribeNewsletter.propTypes = {
  match: React.PropTypes.object.isRequired
}
