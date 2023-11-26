importScripts("tic-tac-toe.js");

onmessage = (e) => {
  handleMessage(e);
};

const handleMessage = async (e) => {
  const Module = await Main();
  const workerResult = Module.ccall(
    "make_move",
    "number",
    ["string"],
    [e.data]
  );
  postMessage(workerResult);
};
