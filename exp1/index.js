const myUrl = 'calc.wasm';
let doubler, halfer;

const importObject = {
    env: {
        'memoryBase': 0,
        'tableBase': 0,
        'memory': new WebAssembly.Memory({initial: 256}),
        'table': new WebAssembly.Table({initial: 256, element: 'anyfunc'}),
        abort: alert,
    }
};

function fetchAndInstantiate(url, opts) {
    return WebAssembly.instantiateStreaming(fetch(url), opts)
    .then(results => {
        let exports = results.instance.exports;
        doubler = exports._doubler;
        halfer = exports._halfer;
    });
}

fetchAndInstantiate(myUrl, importObject);

function calcDouble() {
    const num = document.getElementById("num").value;
    const el = document.getElementById("result");
    el.innerHTML= doubler(num);
}

function calcHalf() {
    const num = document.getElementById("num").value;
    const el = document.getElementById("result");
    el.innerHTML= halfer(num);
}