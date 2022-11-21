const { pool } = require("../../../config/database")
// const { lo}
const boardDao = require("./boardDao")


exports.getPostList = async (title) => {
    if(!title){
        const connection = await pool.getConn
    }
}