// 게시글 리스트 조회 uesrId로
const selectPostUser = async (connection,userId)=>{
    try{
        const selectPostUserQuery = `SELECT * FROM post WHERE user_id = $1 and status = 'ONLINE'; `
        return await connection.query(selectPostUserQuery, [userId]);
    }catch(error){
        return error
    }
}

// 게시글 리스트 조회 title로
const selectPostTitle = async (connection,title)=>{
    try{
        const selectPostTitleQuery = `SELECT * FROM post WHERE title = $1 and status = 'ONLINE'; `
        return await connection.query(selectPostTitleQuery, [title]);
    }catch(error){
        return error
    }
}

// 게시글 리스트 전체 조회 
const selectPost = async (connection)=>{
    try{
        const selectPostQuery = `SELECT * FROM post WHERE status = 'ONLINE';`
        return await connection.query(selectPostQuery);
    }catch(error){
        return error;
    }
}

// 특정 게시글 조회
const selectPostId = async (connection, id)=>{
    try{
        const selectPostQuery = `SELECT * FROM post WHERE id = $1 and status = 'ONLINE';`
        return await connection.query(selectPostQuery, [id]);
    }catch(error){
        return error;
    }
}

// 게시글 생성
const insertPost = async (poolClient, title, body, userId) =>{
    try{
        await poolClient.query("BEGIN")
        const insertPostQuery = 'INSERT INTO post ("title", "body", "user_id" ) VALUES ($1, $2, $3) returning *;'
        const insertResult = await poolClient.query(insertPostQuery, [title, body, userId]);
        await poolClient.query("COMMIT");
        poolClient.release();
        return insertResult
    }catch(error){
        poolClient.release();
        return error;
    }
}
    

// 게시글 수정
const updatePost = async (connection, title, body) =>{
    const updatePostQuery = 'UPDATE post SET (title, body) = ($1, $2) returning *;'
    const updateResult = await connection.query(updatePostQuery, [title, body])
    return updateResult
}

// 게시글 삭제
const deletePost = async (connection, postId)=>{
    const deletePostQuery = `UPDATE post SET status = 'OFFLINE' WHERE id = $1;`
    const deleteResult = await connection.query(deletePostQuery, [postId]);
    return deleteResult;
}


module.exports = {
    selectPostUser,
    selectPostTitle,
    selectPost,
    insertPost,
    updatePost,
    selectPostId,
    deletePost
};
