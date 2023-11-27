function p(str){
    console.log(str)
}
// for (let i = 32; i <= 127; i++) {
//     const char = String.fromCharCode(i);
//     console.log(i, char);
//   }

function generatorPasswrod(namePage){
    const abc="abcdefghijklmnopqrstuwxyz";
    str= "if(B5C==2022){print(qwwf)}";
    p(abc.indexOf("b"))

}
generatorPasswrod("se")




function generatorPasswrod(namePage) {
    const abc = "abcdefghijklmnopqrstuwxyz";
    str = "if(B5C==2022){print(qwwf)}";
    abc.indexOf("a")

}





//p(alfabeto.push(String.fromCharCode(i)))


// function kripto(cad = '', sw = 0) {
//     if (sw > 1 || sw < 0) {
//       return "Error: parámetro no válido";
//     }
//     let new_cad = "";
    
//     if (typeof cad !== 'string') {
//       try {
//         cad = String(cad);
//       } catch {
//         return "";
//       }
//     }
    
//     if (cad.length > 0) {
//       if (sw === 0) {
//         for (let i = 0; i < cad.length; i++) {
//           const letra = cad[i];
//           const aux = letra.charCodeAt(0);
//           for (let j = 0; j < 6; j++) {
//             const x = Math.floor(Math.random() * (122 - 65 + 1)) + 65;
//             new_cad += String.fromCharCode(x);
//           }
//           new_cad += String.fromCharCode(aux + 3);
//         }
//       } else {
//         for (let z = 6; z < cad.length; z += 7) {
//           const aux = cad.charCodeAt(z);
//           new_cad += String.fromCharCode(aux - 3);
//         }
//       }
//     }
    
//     return new_cad;
//   }
  
//   const cifrar = kripto("Holaque", 0);
//   console.log(cifrar);
//   console.log(kripto(cifrar, 1));
  