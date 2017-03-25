import React, { Component } from 'react'

class Index extends Component {
  constructor (props) {
    super(props)
    this.submitEmail = this.submitEmail.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.state = {value: ''}
  }

  handleChange (event) {
    this.setState({value: event.target.value})
  }

  submitEmail (e) {
    e.preventDefault()
    console.log(this.state.value)
  }

  render () {
    return (
      <div className='Index'>
        <form onSubmit={this.submitEmail}>
          <input type='email' value={this.state.value} onChange={this.handleChange} placeholder='Your email' />
          <button>Subscribe</button>
        </form>
      </div>
    )
  }
}

export default Index
