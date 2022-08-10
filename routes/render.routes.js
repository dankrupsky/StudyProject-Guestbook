const  express =  require("express");
const router = express.Router();
const renderer = require('../controllers/render.controller.js');

router.post("/", renderer.addComment);
router.get("/", renderer.getAllComments);

module.exports = router;
