const express = require('express');
const logger = require('../lib/logger');
const departmentRouter = require('./department');
const userRouter = require('./user');
const authRouter = require('./auth');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

// logTest
router.get('/log-test', (req, res, next) => {
  logger.error('This message is error');
  logger.warn('This message is warn');
  logger.info('This message is info');
  logger.verbose('This message is verbose');
  logger.debug('This message is debug');
  logger.silly('This message is silly');

  res.send('log test');
});

router.use('/departments', departmentRouter);
router.use('/users', userRouter);
router.use('/auths', authRouter);

module.exports = router;
