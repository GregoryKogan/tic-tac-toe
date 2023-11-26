const { int_sqrt, very_slow_function } = await new Promise(
  (resolve, reject) => {
    try {
      let Module;
      Main().then((m) => {
        Module = m;

        const int_sqrt = Module.cwrap("int_sqrt", "number", ["number"]);
        const very_slow_function = Module.cwrap(
          "very_slow_function",
          "number",
          ["number"]
        );

        resolve({ int_sqrt, very_slow_function });
      });
    } catch (e) {
      reject(e);
    }
  }
);

export { int_sqrt, very_slow_function };
