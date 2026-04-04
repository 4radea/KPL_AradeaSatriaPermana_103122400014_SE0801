/**
 * Mengembalikan "Fizz", "Buzz", "FizzBuzz", atau angka itu sendiri
 * @param {number} value - Bilangan bulat
 * @returns {string | number}
 */
function zzzzOrNum(value) {
    // validasi harus number dan integer
    if (typeof value !== "number" || !Number.isInteger(value)) {
        throw new Error("Input harus bilangan bulat");
    }

    if (value % 15 === 0) return "FizzBuzz";
    if (value % 3 === 0) return "Fizz";
    if (value % 5 === 0) return "Buzz";

    return value;
}

/**
 * Mengubah array angka menjadi hasil FizzBuzz
 * @param {number[]} sequence - Array berisi bilangan bulat
 * @returns {(string | number)[]}
 */
function fizzBuzz(sequence) {
    // validasi harus array
    if (!Array.isArray(sequence)) {
        throw new Error("Input harus array");
    }

    // validasi isi array harus integer semua
    for (const item of sequence) {
        if (typeof item !== "number" || !Number.isInteger(item)) {
            throw new Error("Semua elemen harus bilangan bulat");
        }
    }

    const newSequence = sequence.map((e) => zzzzOrNum(e));

    return newSequence;
}

module.exports = {
    fizzBuzz: fizzBuzz,
    zzzzOrNum: zzzzOrNum,
};