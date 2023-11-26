const { make_move } = await new Promise((resolve, reject) => {
  try {
    let Module;
    Main().then((m) => {
      Module = m;

      const make_move = Module.cwrap("_make_move", "number", ["string"]);

      resolve({ make_move });
    });
  } catch (e) {
    reject(e);
  }
});

export { make_move };
