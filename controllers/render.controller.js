const CommentService = require('../services/CommentService');
const pug = require('pug');

module.exports = class Comment{
    static async getAllComments(req, res, next) {
        try {
            const comments = await CommentService.gelAllComments();
            let renderedResponse = "";
            console.log(comments)
            if (!comments || comments.length == 0) {
                console.log("no comments")
                renderedResponse += pug.renderFile("./views/comment.pug", {name: 'No comments yet!', date: 'Infinity of time', text: 'Be first to leave a comment!'});
            }
            for (let i = 0; i < comments.length; i++) {
                renderedResponse = pug.renderFile("./views/comment.pug", {name: comments[i].name, date: comments[i].date, text: comments[i].text}) + renderedResponse;
            }
            res.render("index", {content: renderedResponse});
        } catch (error) {
                res.status(500).json({error: error, dk: "DB Problem"});
        }
    }

    static async addComment(req, res, next) {
        try {
            const addedComment = await CommentService.addComment({name: req.body.name, text: req.body.text, ip: req.socket.remoteAddress});
            console.log("Comment added!");
            res.redirect('/');
        } catch (error) {
            res.status(500).json({error: error, dk: "DB Problem (POST)"});
        }
    }
};
