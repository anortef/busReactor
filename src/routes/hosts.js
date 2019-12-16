const express = require('express')

const router = express.Router()

/**
 * This endpoint is to save a new bus host
 * @route POST /hosts/new
 * @path /
 * @group Hosts
 * @returns {object} 200 - A simple string
 */
router.post('/hosts/new', (req, res) => {
  res.json({
    success: 'New host created'
  })
})

module.exports = router
