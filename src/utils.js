console.log('utils is runningggg');

const square = (x) => x * x;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

export default subtract;

// exports - default export - named exports
export {square, add, subtract as default};