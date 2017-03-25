import cloudinary from 'cloudinary'

/* global Meteor Email SSR Assets:true */
process.env.MAIL_URL = Meteor.settings.MAIL_URL
const emailData = {
  twitterLogo: cloudinary.url('twitter_mvjn8k.png'),
  facebookLogo: cloudinary.url('facebook_uczxnv.png')
}
SSR.compileTemplate('htmlEmail', Assets.getText('html-email.html'))
// Email.send({
//   to: 'benjamin.cherion@gmail.com',
//   from: 'support@awesomepackages.com',
//   subject: 'Welcome to AwesomePackages !',
//   html: SSR.render('htmlEmail', emailData)
// })