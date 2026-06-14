/**
 *  Persamaa Linear Satu Variabel dan dua suku
 * @param {string} x 
 * @param {number} a 
 * @returns 
 */



export function pslv_dua(x, a) {

    const coeff = parseInt(x);
    const hasil = a / coeff;
    return {
        "x": x,
        "dengan": "=",
        hasil
    }
}

/** *  Persamaa Linear Satu Variabel dan tiga suku
 * @param {string} x 
 * @param {number} a 
 * @param {number} b  
 */

export function pslv_tiga(x, a, b) {

    //y - 8 = 10
    let hasil = 0;

    //jika hanya satu koofisien
    if (x.length === 1) {
        hasil = b - a;
    } else if (x.length >= 2) {
        const coeff = parseInt(x);
        hasil = (b - a) / coeff;
    }
    return {
        "x": x,
        "dengan": "=",
        hasil
    }
}