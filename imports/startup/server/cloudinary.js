import cloudinary from 'cloudinary'

const init = () => {
  cloudinary.config({
    /* global Meteor:true */
    cloud_name: process.env.CLOUD_NAME || Meteor.settings.cloudinary.cloudName,
    api_key: process.env.CLOUD_API_KEY || Meteor.settings.cloudinary.apiKey,
    api_secret: process.env.CLOUD_API_SECRET || Meteor.settings.cloudinary.apiSecret
  })
}

init()
