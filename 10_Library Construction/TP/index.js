/**
 * Menghitung jumlah huruf (A-Z dan a-z)
 * Spasi, angka, dan simbol tidak dihitung
 */
function countLetters(text) {
    const matches = text.match(/[A-Za-z]/g);
    return matches ? matches.length : 0;
}

/**
 * Menghitung jumlah kata
 * Kata hanya terdiri dari huruf A-Z dan a-z
 */
function countWords(text) {
    const matches = text.match(/[A-Za-z]+/g);
    return matches ? matches.length : 0;
}

export { countLetters, countWords };