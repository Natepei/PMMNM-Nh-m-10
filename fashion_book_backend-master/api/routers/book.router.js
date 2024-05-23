'use strict'
const express = require('express');
const router = express.Router();
const book_controller = require('../controllers/book.controller');
router.get('/book', book_controller.getAllBook);
module.exports = (app) => {
    app.route('/book/totalpage')
        .get(book_controller.getTotalPage);

    app.route('/book/allbook')
        .post(book_controller.getAllBook);

    app.route('/book/publisher')
        .post(book_controller.getBookByPublisher);

    app.route('/book/category')
        .post(book_controller.getBookByCategory);

    app.route('/book/author')
        .post(book_controller.getBookByAuthor);

    app.route('/book/:id')
        .get(book_controller.getBookByID)

    app.route('/book/related/:bookId')
        .get(book_controller.getRelatedBook)
}