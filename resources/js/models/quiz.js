const mongoose = require('mongoose');

const quizQuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  answers: {
    type: Array,
    required: true
  },
  correct: {
    type: Number
  }
})

module.exports = mongoose.model('quiz', quizQuestionSchema);