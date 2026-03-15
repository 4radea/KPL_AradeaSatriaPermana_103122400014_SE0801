const editorElement = document.getElementById("editor-kecil");

const charCountElement = document.getElementById("hf");
const upperCountElement = document.getElementById("hb");
const lowerCountElement = document.getElementById("hk");

// event saat user mengetik
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

const hurufBesarButton = document.getElementById("huruf-besar");
const hurufKecilButton = document.getElementById("huruf-kecil");

// tombol besarkan huruf
hurufBesarButton.addEventListener("click", () => {
    const text = editorElement.value;
    editorElement.value = text.toUpperCase();

    // supaya counter langsung update
    editorElement.dispatchEvent(new Event("input"));
});

// tombol kecilkan huruf
hurufKecilButton.addEventListener("click", () => {
    const text = editorElement.value;
    editorElement.value = text.toLowerCase();

    // supaya counter langsung update
    editorElement.dispatchEvent(new Event("input"));
});