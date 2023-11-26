(function(){"use strict";importScripts("tic-tac-toe.js"),onmessage=s=>{e(s)};const e=async s=>{const t=(await Main()).ccall("make_move","number",["string"],[s.data]);postMessage(t)}})();
