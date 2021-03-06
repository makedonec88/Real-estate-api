const { check, validationResult } = require('express-validator/check');
const { matchedData, sanitize } = require('express-validator/filter');

const multer  = require('multer')
const upload = multer()

const bot = require('../bot/bot')

exports.showFormErrors = (req, res, next) => {
  const err = validationResult(req);
  console.log('form body' + new Date().getMinutes(), req.body)

  if (!err.isEmpty()) {
    console.log(err.mapped())
    return
    res.json({valid: false})
  }

  const {name, email, phone, message} = req.body

  // bot.sendGroupMessage(
  //   '*name* = ' + name + ',\n' +
  //   '*email* = ' + email + ',\n' +
  //   '*phone* = ' + phone + ',\n' +
  //   '*message* = ' + message
  // )

  res.json({valid: true})

};