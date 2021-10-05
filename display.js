function display(callback, ...args) {
    callback(args);
   }

const displayModeA = (args) =>
    alert(`Luas : ${args[0]} cm\u00B2 | Keliling : ${args[1]} cm`);

const displayModeB = (args) =>
    alert(`Luas persegi panjang yang didapatkan adalah ${args[0]} cm\u00B2, sedangkan kelilingnya adalah ${args[1]} cm`
    );