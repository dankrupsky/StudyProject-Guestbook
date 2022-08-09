const  express =  require("express");
const router = express.Router();
const dbcontroller = require('../controllers/comment.controller.js')

router.post("/addcomment", dbcontroller.apiAddComment);
router.get("/getallcomments", dbcontroller.apiGetAllComments);

module.exports =  router;
