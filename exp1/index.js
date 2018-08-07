const myUrl = 'calc.wasm';

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
        const doubler = exports._doubler;
        const halfer = exports._halfer;
        console.log("il doppio di 3: ", doubler(3))
        console.log("la metà di 10: ", halfer(10))
    });
}

fetchAndInstantiate(myUrl, importObject);