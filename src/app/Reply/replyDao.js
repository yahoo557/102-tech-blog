// 작성자로 댓글 조회
 const selectReplyUser  = async (connection, userId) =>{
    const selectReplyUserQuery = `SELECT * FROM reply WHERE user_id = $1 and status = 'ONLINE';`;
    return await connection.query(selectReplyUserQuery, [userId]);;
}

// 게시글로 댓글 조회
const selectReplyPost  = async (connection, poatId) =>{
    const selectReplyPostQuery = `SELECT * FROM reply WHERE post_id = $1 and status = 'ONLINE';`;
    return await connection.query(selectReplyPostQuery, [poatId]);;
}

// 댓글 생성
const insertReply = async (connection, body, userId) =>{
    const insertReplyQuery = `INSERT body, user_id FROM reply VALUSE($1, $2);`;
    return await connection.query(insertReplyQuery, [body, userId]);;
}

// 댓글 수정
const updateReply = async (connection, body, reply_id) =>{
    const updateReply = `UPDATE body FROM reply WHERE id =  `
}


// 댓글 삭제
const deleteReply = async(connection, replyId)=>{
    const deleteReplyQuery = `UPDATE `

}

module.exports = {
    selectReplyUser,
    selectReplyPost,
    insertReply,
    updateReply,
    deleteReply
};
