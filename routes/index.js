var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');
var staticsController = require ('../controllers/statics_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'QUIZ' });
});

router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);
router.get('/author', staticsController.author);

module.exports = router;
