const selectImageS3 = (connection, imageId)=>{

};
const createToken = (connection)=>{

}

const selectRandomQuiz = async (connection)=>{
    const selectPostQuery = `SELECT * FROM quiz WHERE status = 'ONLINE' LIMIT 20;`
    return await connection.query(selectPostQuery);
}

module.exports = {
    createToken,
    selectImageS3,
    selectRandomQuiz
};
  