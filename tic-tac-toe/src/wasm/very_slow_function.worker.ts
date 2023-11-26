importScripts("tic-tac-toe.js");

onmessage = (e) => {
    handleMessage(e);
};

const handleMessage = async (e: MessageEvent) => {
    const Module = await Main();

    const very_slow_function = Module.cwrap("very_slow_function", "number", ["number"]);

    const workerResult = very_slow_function(e.data);
    postMessage(workerResult);
};