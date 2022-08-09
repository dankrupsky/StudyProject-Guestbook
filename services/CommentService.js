const Comment = require('../models/Comment');

module.exports = class CommentService{
    static async gelAllComments() {
        try {
            const allComments = await Comment.find();
            return allComments;
        } catch (error) {
            console.log(`Could not find any comments ${error}`)
        }
    }

    static async addComment(data) {
        try {
            const newComment = {
                name: data.name,
                text: data.text,
                ip: data.ip,
            }
            const response = await new Comment(newComment).save();
            return response;
        } catch (error) {
            console.log(`Failed to add new comment ${error}`)
        }
    }
};
