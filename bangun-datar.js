// const PHI = 22 / 7;

// function luasPersegi(sisi) {
//  return sisi ** 2;
// }

// function kelilingPersegi(sisi) {
//  return 4 * sisi;
// }

// function luasPersegiPanjang(panjang, lebar) {
//  return panjang * lebar;
// }

// function kelilingPersegiPanjang(panjang, lebar) {
//  return 2 * (panjang + lebar);
// }

// function luasLingkaran(radius) {
//  return PHI * radius ** 2;
// }

// function kelilingLingkaran(radius) {
//  return 2 * PHI * radius;
// }

//langkah 2
// const PHI = 22 / 7;

// const luasPersegi = function (sisi) {
//  return sisi ** 2;
// };

// const kelilingPersegi = function (sisi) {
//  return 4 * sisi;
// };

// const luasPersegiPanjang = function (panjang, lebar) {
//  return panjang * lebar;
// };

// const kelilingPersegiPanjang = function (panjang, lebar) {
//  return 2 * (panjang + lebar);
// };

// const luasLingkaran = function (radius) {
//  return PHI * radius ** 2;
// };

// const kelilingLingkaran = function (radius) {
//  return 2 * PHI * radius;
// };

//langkah3
const PHI = 22 / 7;

const luasPersegi = (sisi) => sisi ** 2;

const kelilingPersegi = (sisi) => 4 * sisi;

const luasPersegiPanjang = (panjang, lebar) => panjang * lebar;

const kelilingPersegiPanjang = (panjang, lebar) => 2 * (panjang + lebar);

const luasLingkaran = (radius) => PHI * radius ** 2;

const kelilingLingkaran = (radius) => 2 * PHI * radius;

const luasSegitiga = (alas,tinggi) => alas * tinggi / 2

const kelilingSegitiga = (alas) => alas * 3

const luasTrapesium = (a,b,tinggi) => (a+b)*tinggi/2

const kelilingTrapesium = (a,b,c,d) => a+b+c+d

const luasJajarGenjang = (alas,tinggi) => alas * tinggi

const kelilingJajarGenjang = (alas, miring) => (alas+miring) * 2

const luasBelahKetupat = (d1,d2) => (d1*d2)/2

const kelilingBelahKetupat = (s) => 4 * s

const luasLayang2 = (di1,di2) => di1 * di2 / 2

const kelilingLayang2 = (a,c) => 2 * (a+c)