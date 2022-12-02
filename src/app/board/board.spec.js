const {  } = require("./boardControler");


test('입력한 이메일 주소에는 "@" 문자가 1개만 있어야 이메일 형식이다.', () => {
    expect(isEmail("my-email@domain.com")).toEqual(true); // 1개만 있는 상황
    expect(isEmail("my-email@@@@domain.com")).toEqual(false); // 여러개 있는 상황
    expect(isEmail("my-emaildomain.com")).toEqual(false); // 하나도 없는 상황
});
