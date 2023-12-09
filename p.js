// function df(cad, callback) {
//     if (cad === "hola") {
//         console.log(cad);
//         callback(null, cad);
//     } else {
//         const err = true;
//         callback(err, null);
//     }
// }

// df("hola", (err, pri) => {
//     if (err) {
//         console.log("fallo")
//     } else {
//         console.log(pri)
//     }
// })

const ls = [{id:1, "utm": [{ "programa": [], "conta": [] }] }, {id:2, "hakin": [{ "dork": [] }] }]
const result = ls.find((element) => element.id === 1);
console.log(result)
// console.log(ls)
