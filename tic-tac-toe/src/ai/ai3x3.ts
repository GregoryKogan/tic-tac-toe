export async function ai3x3Move(field: number[][], turn: 1 | 2): Promise<{ i: number, j: number; }> {
    let flatField = field.flat();
    if (turn === 1)
        flatField = flatField.map((x) => x === 2 ? 1 : x === 1 ? 2 : x);

    const stateString = flatField.join("");
    const wasm_worker = new Worker(new URL("@/wasm/make_move.worker.js", import.meta.url));
    wasm_worker.postMessage(stateString);

    return new Promise((resolve) => {
        wasm_worker.onmessage = (e) => {
            const index = e.data;
            resolve({
                i: Math.floor(index / 3),
                j: index % 3,
            });
        };
    });
}