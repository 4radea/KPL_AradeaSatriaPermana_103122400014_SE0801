const editorElement = document.getElementById("editor-kecil");

const charCountElement = document.getElementById("hf");
const upperCountElement = document.getElementById("hb");
const lowerCountElement = document.getElementById("hk");

const hurufBesarButton = document.getElementById("huruf-besar");
const hurufKecilButton = document.getElementById("huruf-kecil");

const buttonLightElement = document.getElementById("tombol-terang");
const buttonDarkElement = document.getElementById("tombol-gelap");
const buttonSepiaElement = document.getElementById("tombol-sepia");

// ==========================
// HITUNG KARAKTER
// ==========================
editorElement.addEventListener("input", (event) => {
    const text = event.target.value;

    const textWithoutSpace = text.replace(/\s/g, "");
    charCountElement.textContent = textWithoutSpace.length;

    const uppercase = text.match(/[A-Z]/g) || [];
    upperCountElement.textContent = uppercase.length;

    const lowercase = text.match(/[a-z]/g) || [];
    lowerCountElement.textContent = lowercase.length;
});

// ==========================
// KONVERSI TEKS
// ==========================
hurufBesarButton.addEventListener("click", () => {
    editorElement.value = editorElement.value.toUpperCase();
    editorElement.dispatchEvent(new Event("input"));
});

hurufKecilButton.addEventListener("click", () => {
    editorElement.value = editorElement.value.toLowerCase();
    editorElement.dispatchEvent(new Event("input"));
});

// ==========================
// MODE
// ==========================
function setMode(mode) {
    document.body.classList.remove("mode-gelap", "mode-sepia");

    if (mode === "dark") {
        document.body.classList.add("mode-gelap");
    } else if (mode === "sepia") {
        document.body.classList.add("mode-sepia");
    }
}

// tombol mode
buttonLightElement.addEventListener("click", () => {
    setMode("light");
});

buttonDarkElement.addEventListener("click", () => {
    setMode("dark");
});

buttonSepiaElement.addEventListener("click", () => {
    setMode("sepia");
});

function setActiveButton(activeButton) {
    // hapus active dari semua tombol mode
    buttonLightElement.classList.remove("active");
    buttonDarkElement.classList.remove("active");
    buttonSepiaElement.classList.remove("active");

    // tambahkan ke yang dipilih
    activeButton.classList.add("active");
}

