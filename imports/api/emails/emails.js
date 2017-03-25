import { Mongo } from 'meteor/mongo'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Factory } from 'meteor/dburles:factory'

const Emails = new Mongo.Collection('emails')
export default Emails

Emails.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
})

Emails.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
})

Emails.schema = new SimpleSchema({
  email: {
    type: String,
    label: 'The subscribed email.'
  }
})

Emails.attachSchema(Emails.schema)

Factory.define('document', Emails, {
  title: () => 'Factory Title'
})
