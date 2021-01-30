const express = require('express');

const router = express.Router();

const Owner = require('../controllers/owner');
const Rule = require('../controllers/rule');

router.get('/', (req, res) => {
  const owner = new Owner(req, res);
  owner.viewInfo();
});

router.post('/validate-rule', (req, res) => {
  const rule = new Rule(req, res);
  rule.validateData();
});

module.exports = router;
