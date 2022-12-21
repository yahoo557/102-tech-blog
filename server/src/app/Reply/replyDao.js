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
const insertReply = async (connection, body, userIP, postId) =>{
    const insertReplyQuery = 'INSERT INTO reply ("body", "user_ip", "post_id" ) VALUES ($1, $2, $3) returning *;'
    return await connection.query(insertReplyQuery, [body, userIP, postId]);
}

// 댓글 수정
const updateReply = async (connection, body, reply_id) =>{
    const updateReply = `UPDATE reply SET body = %1 WHERE id = $2 returning *;`
    return await connection.query(updateReply, [body, reply_id]);
}


// 댓글 삭제
const deleteReply = async(connection, replyId)=>{
    const deleteReplyQuery = `UPDATE reply SET status = 'OFFLINE' WHERE id = $1`
    return await connection.query(deleteReplyQuery, [replyId]);
}

module.exports = {
    selectReplyUser,
    selectReplyPost,
    insertReply,
    updateReply,
    deleteReply
};
