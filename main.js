// Ambil elemen dari HTML
const angka1 = document.getElementById("angka1");
const angka2 = document.getElementById("angka2");
const hasil = document.getElementById("hasil");

const btnTambah = document.getElementById("tambah");
const btnKurang = document.getElementById("kurang");
const btnKali = document.getElementById("kali");
const btnBagi = document.getElementById("bagi");

// Fungsi untuk mengambil angka dari input
function getAngka() {
    return {
        num1: parseFloat(angka1.value) || 0,
        num2: parseFloat(angka2.value) || 0
    };
}

// Event untuk operasi penjumlahan
btnTambah.addEventListener("click", function() {
    const { num1, num2 } = getAngka();
    hasil.textContent = num1 + num2;
});

// Event untuk operasi pengurangan
btnKurang.addEventListener("click", function() {
    const { num1, num2 } = getAngka();
    hasil.textContent = num1 - num2;
});

// Event untuk operasi perkalian
btnKali.addEventListener("click", function() {
    const { num1, num2 } = getAngka();
    hasil.textContent = num1 * num2;
});

// Event untuk operasi pembagian
btnBagi.addEventListener("click", function() {
    const { num1, num2 } = getAngka();
    if (num2 === 0) {
        hasil.textContent = "Tidak bisa dibagi oleh 0!";
    } else {
        hasil.textContent = num1 / num2;
    }
});

// Konversi Satuan
const nilaiKonversi = document.getElementById("nilaiKonversi");
const jenisKonversi = document.getElementById("jenisKonversi");
const btnKonversi = document.getElementById("konversi");
const hasilKonversi = document.getElementById("hasilKonversi");

// Fungsi untuk konversi satuan
btnKonversi.addEventListener("click", function() {
    let nilai = parseFloat(nilaiKonversi.value) || 0;
    let hasil = 0;

    switch (jenisKonversi.value) {
        case "meter-ke-km":
            hasil = nilai / 1000; // 1 meter = 0.001 km
            break;
        case "km-ke-meter":
            hasil = nilai * 1000; // 1 km = 1000 meter
            break;
        case "kg-ke-gram":
            hasil = nilai * 1000; // 1 kg = 1000 gram
            break;
        case "gram-ke-kg":
            hasil = nilai / 1000; // 1000 gram = 1 kg
            break;
        case "c-ke-f":
            hasil = (nilai * 9/5) + 32; // Celsius ke Fahrenheit
            break;
        case "f-ke-c":
            hasil = (nilai - 32) * 5/9; // Fahrenheit ke Celsius
            break;
        default:
            hasil = "Konversi tidak ditemukan";
    }

    hasilKonversi.textContent = hasil;
});
