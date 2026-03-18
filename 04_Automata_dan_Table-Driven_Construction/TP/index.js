const editorElement = document.getElementById("editor-kecil");

const charCountElement = document.getElementById("hf");
const upperCountElement = document.getElementById("hb");
const lowerCountElement = document.getElementById("hk");
const hurufBesarButton = document.getElementById("huruf-besar");
const hurufKecilButton = document.getElementById("huruf-kecil");
const buttonLightElement = document.getElementById("tombol-terang");
const buttonDarkElement = document.getElementById("tombol-gelap");

// event saat user mengetik
editorElement.addEventListener("input", (event) => {
    const text = event.target.value;

    const textWithoutSpace = text.replace(/\s/g, "");
    charCountElement.textContent = textWithoutSpace.length;

    const uppercase = text.match(/[A-Z]/g) || [];
    upperCountElement.textContent = uppercase.length;

    const lowercase = text.match(/[a-z]/g) || [];
    lowerCountElement.textContent = lowercase.length;
});

// tombol besarkan huruf
hurufBesarButton.addEventListener("click", () => {
    editorElement.value = editorElement.value.toUpperCase();
    editorElement.dispatchEvent(new Event("input"));
});

// tombol kecilkan huruf
hurufKecilButton.addEventListener("click", () => {
    editorElement.value = editorElement.value.toLowerCase();
    editorElement.dispatchEvent(new Event("input"));
});

// mode terang
buttonLightElement.addEventListener("click", () => {
    document.body.classList.remove("mode-gelap");
});

// mode gelap
buttonDarkElement.addEventListener("click", () => {
    document.body.classList.add("mode-gelap");
});