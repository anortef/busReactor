const express = require('express')

const router = express.Router()

/**
 * This endpoint is used for monitoring expecting 200
 * @route GET /status
 * @path /
 * @group Health
 * @returns {object} 200 - A simple string
 */
router.get('/status', (req, res) => {
  res.json({
    success: 'I´m alive'
  })
})

module.exports = router
