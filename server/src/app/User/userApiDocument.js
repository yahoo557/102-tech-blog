/**
 * @swagger
 * tags:
 *   name: Users
 *   description: 유저 생성 조회 로그인 수정 탈퇴
 */
/**
 * @swagger
 * paths:
 *  /app/users:
 *    post:
 *      summary: "유저 생성 (회원가입) API"
 *      description: ""
 *      tags: [Users]
 *      responses:
 *        "200":
 *          description: 회원가입성공
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    ok:
 *                      type: boolean
 *                    users:
 *                      type: object
 *                      example:
 *
 */
/**
 * @swagger
 * paths:
 *  /app/users:
 *    get:
 *      summary: "유저 조회 API"
 *      description: ""
 *      tags: [Users]
 *      responses:
 *        "200":
 *          description: 유저 조회 성공
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    ok:
 *                      type: boolean
 *                    users:
 *                      type: object
 *                      example:
 *
 */
/**
 * @swagger
 * paths:
 *  /app/users:
 *    post:
 *      summary: "유저 로그인 API"
 *      description: ""
 *      tags: [Users]
 *      responses:
 *        "200":
 *          description: 유저 로그인 성공
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    ok:
 *                      type: boolean
 *                    users:
 *                      type: object
 *                      example:
 *
 */