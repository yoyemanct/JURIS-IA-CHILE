// Diagnóstico de las fuentes de jurisprudencia y doctrina, con detalle.
// Uso: node scripts/probar-fuentes.js
const pjud = require("../fuentes/jurisprudencia/pjud");
const { buscarSentenciasTC } = require("../fuentes/jurisprudencia/tconstitucional");
const { buscarDictamenes } = require("../fuentes/jurisprudencia/contraloria");
const { buscarDoctrina } = require("../fuentes/doctrina");
const dt = require("../fuentes/jurisprudencia/direcciontrabajo");
const { buscarTDLC } = require("../fuentes/jurisprudencia/tdlc");

async function probar(nombre, fn) {
  const t = Date.now();
  try {
    const r = await fn();
    console.log(`OK   ${nombre} (${Date.now() - t} ms)`);
    console.log(JSON.stringify(r, null, 1).slice(0, 1500));
  } catch (e) {
    console.log(`FALLA ${nombre} (${Date.now() - t} ms): ${e.message}`);
    if (e.cause) console.log("  causa:", e.cause.message || e.cause);
  }
  console.log("-".repeat(70));
}

(async () => {
  await probar("Corte Suprema", () => pjud.buscarSentencias({ tribunal: "corte_suprema", todas: "nulidad despido", limite: 1 }));
  await probar("Corte de Apelaciones", () => pjud.buscarSentencias({ tribunal: "corte_apelaciones", todas: "recurso proteccion", limite: 1 }));
  await probar("Tribunal Constitucional", () => buscarSentenciasTC({ consulta: "debido proceso", limite: 1 }));
  await probar("Contraloría", () => buscarDictamenes({ texto: "feriado legal", limite: 1 }));
  await probar("Dirección del Trabajo", () => dt.buscarDictamenesDT({ consulta: "feriado anual trabajadores", limite: 2 }));
  await probar("TDLC", () => buscarTDLC({ consulta: "colusión farmacias", limite: 2 }));
  await probar("Corte Suprema (cortacircuito, debe fallar rápido)", () => pjud.buscarSentencias({ tribunal: "corte_suprema", todas: "otra consulta", limite: 1 }));
  await probar("Doctrina", () => buscarDoctrina({ consulta: "despido injustificado indemnización", limite: 1 }));
})();
