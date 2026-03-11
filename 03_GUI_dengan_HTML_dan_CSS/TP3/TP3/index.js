const editorElement = document.getElementById("editor-kecil");

const charCountElement = document.getElementById("hf");
const upperCountElement = document.getElementById("hb");
const lowerCountElement = document.getElementById("hk");

editorElement.addEventListener("input", (event) => {

    const text = event.target.value;

    // hitung huruf tanpa spasi
    const textWithoutSpace = text.replace(/\s/g, "");
    charCountElement.textContent = textWithoutSpace.length;

    // hitung huruf besar
    const uppercase = text.match(/[A-Z]/g) || [];
    upperCountElement.textContent = uppercase.length;

    // hitung huruf kecil
    const lowercase = text.match(/[a-z]/g) || [];
    lowerCountElement.textContent = lowercase.length;

});