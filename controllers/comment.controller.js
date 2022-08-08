const CommentService = require('../services/CommentService');


module.exports = class Article{
    static async apiGetAllComments(req, res, next) {
        try {
            const comments = await CommentService.apiGetAllComments();
            if (comments) {
                res.status(404).json('No comments posted yet.');
            }
            res.json(articles);
        } catch (error) {
                res.status(500).json({error: error});
        }
    }

    static async apiAddComment(req, res, next) {
        try {
            const addedComment = await CommentService.apiAddComment(req.body);
            res.json(addedComment);
        } catch (error) {
            res.status(500).json({error: error});
        }
    }
};
