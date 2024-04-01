// const moduleData = require("./math");
// const { add, sub } = require("./math");

// ES module 시스템에서는 파일명에 꼭 확장자 작성하기
// default는 따로 불러와야하고 - 구조분해x, 이름 재설정이 가능
import multiply, { add, sub } from "./math.js";

console.log("hello node.js!!");
console.log(add(1, 2));
