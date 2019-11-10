const express = require('express')
const router = express.Router()

const users = require('./users')
const auth = require('./auth')
const movies = require('./movies');

/**
 * @swagger
 * /users:
 *    get:
 *      description: To Register use with IMDB Clone APO application
 */
router.post('/users', users.create);

  /**
   * @swagger
   * definitions:
   *   auth:
   *     required:
   *       - username
   *       - password
   *     properties:
   *       username:
   *         type: string
   *       password:
   *         type: string
   *       path:
   *         type: string
   */

  /**
   * @swagger
   * tags:
   *   name: Users
   *   description: User management and login
   */

  /**
   * @swagger
   * tags:
   *   - name: auth
   *     description: auth
   *   - name: Accounts
   *     description: Accounts
   */

  /**
   * @swagger
   * /login:
   *   post:
   *     description: Login to the application
   *     tags: [Users, auth]
   *     produces:
   *       - application/json
   *     parameters:
   *       - $ref: '#/parameters/username'
   *       - name: password
   *         description: User's password.
   *         in: formData
   *         required: true
   *         type: string
   *     responses:
   *       200:
   *         description: login
   *         schema:
   *           type: object
   *           $ref: '#/definitions/auth'
   */

router.post('/auth', auth.login);
router.post('/movies', movies.createMovie)
      .get('/movies', movies.healthCheck);

module.exports = router;
