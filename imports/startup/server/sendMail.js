/* global Meteor Email SSR check Assets:true */
import cloudinary from 'cloudinary'

process.env.MAIL_URL = process.env.MAIL_URL || Meteor.settings.MAIL_URL
const emailData = {
  twitterLogo: cloudinary.url('twitter_mvjn8k.png'),
  facebookLogo: cloudinary.url('facebook_uczxnv.png')
}
SSR.compileTemplate('htmlEmail', Assets.getText('html-email.html'))

Meteor.methods({
  sendEmail: function (to, id) {
    check([to, id], [String])
    this.unblock()
    // TODO in production: set ROOT_URL environment variable
    const rootUrl = Meteor.absoluteUrl()
    emailData.unsubscribeUrl = `${rootUrl}unsubscribe/${id}`
    Email.send({
      to: 'benjamin.cherion@gmail.com',
      from: 'support@awesomepackages.com',
      subject: 'Welcome to AwesomePackages !',
      html: SSR.render('htmlEmail', emailData)
    })
  }
})
