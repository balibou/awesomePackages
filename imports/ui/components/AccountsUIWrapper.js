import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Template } from 'meteor/templating'
import { Blaze } from 'meteor/blaze'

export default class AccountsUIWrapper extends Component {
  componentDidMount () {
    this.view = Blaze.render(Template.loginButtons,
      ReactDOM.findDOMNode(this.refs.container))
  }

  componentWillUnmount () {
    Blaze.remove(this.view)
  }

  render () {
    return (
      <p className='field'>
        <a className='button'>
          <span className='icon'>
            <i className='fa fa-github' />
          </span>
          <span ref='container' />
        </a>
      </p>
    )
  }
}
