export const add = (a, b) => {
  return a + b;
};

export const sub = (a, b) => {
  return a - b;
};

export default function multiply(a, b) {
  return a * b;
}

// CommonJS 방식

// module.exports = {
//   add: add,
//   sub: sub,
// };

// module.exports = {
//   add,
//   sub,
// };

// ES6 module

// export { add, sub };
