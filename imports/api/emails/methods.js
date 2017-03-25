/* global Meteor:true */
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { ValidatedMethod } from 'meteor/mdg:validated-method'
import Emails from './emails'
import rateLimit from '../../modules/rate-limit.js'

export const insertEmail = new ValidatedMethod({
  name: 'Emails.insert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    email: { type: String, optional: true }
  }).validator(),
  run (document) {
    if (Emails.findOne(document)) {
      throw new Meteor.Error('Email already subscribed', 'Email already subscribed')
    }
    return Emails.insert(document)
  }
})

rateLimit({
  methods: [
    insertEmail
  ],
  limit: 5,
  timeRange: 1000
})
