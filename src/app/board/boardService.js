const {logger} = require("../../../config/winston");
const {pool} = require("../../../config/database");
const baseResponse = require("../../../config/baseResponseStatus")
const boardDao = require("./boardDao")

exports.createPost = async (title, body, user) =>{
    const poolClient = pool.connect()
    const createPostResult = boardDao.insertPost(poolClient, title, body, user)
    

}

exports.deletePost = async(postId) =>{
    const poolClient = pool.connect()

}

