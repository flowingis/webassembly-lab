const wasm = require("./calc.c");
wasm.init((imports) => {
	// custom javascript function to be called from C;
	imports._sub = (a, b) => a - b;
	return imports;
}).then((module) => {
    console.log(module.exports); 
    console.log(module.exports.add(1, 2)); // 3
    console.log(module.exports.sub10(23)); // 13
	console.log(module.memory);
	console.log(module.memoryManager)
}).catch((err) => {
	console.error(err);
})