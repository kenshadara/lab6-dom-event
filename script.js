const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

const tombol = document.getElementById("tombolAksi");

tombol.addEventListener("click", function () {
    pesan.textContent = "Tombol diklik pada " + new Date().toLocaleTimeString();
});

const tombolGaya = document.getElementById("tombolGaya");
const teksGaya = document.getElementById("teksGaya");

tombolGaya.addEventListener("click", function () {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
});

const namaInput = document.getElementById("namaInput");
const jumlahKarakter = document.getElementById("jumlahKarakter");

namaInput.addEventListener("input", function () {
    jumlahKarakter.textContent = namaInput.value.length;
});

const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const usiaInput = document.getElementById("usia").value;
    const usia = Number(usiaInput);

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama.length < 3) {
    pesanForm.textContent = "Nama wajib diisi minimal 3 karakter.";
    } else if (!polaEmail.test(email)) {
        pesanForm.textContent = "Masukkan email yang valid.";
    } else if (
        usiaInput === "" ||
        !Number.isInteger(usia) ||
        usia < 17 ||
        usia > 100
    ) {
        pesanForm.textContent = "Usia harus berupa bilangan bulat 17–100.";
    } else {
        pesanForm.textContent = "Validasi berhasil. Form siap diproses.";
        form.reset();
    }
});

const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
    const teks = inputTugas.value.trim();

    if (teks === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        return;
    }

    const item = document.createElement("li");
    const label = document.createElement("span");
    const selesai = document.createElement("button");
    const hapus = document.createElement("button");

    label.textContent = teks + " ";

    hapus.type = "button";
    hapus.textContent = "Hapus";

    hapus.addEventListener("click", function () {
    item.remove();
    pesanTugas.textContent = "Tugas berhasil dihapus.";
    });
    selesai.addEventListener("click", function () {
        item.classList.toggle("selesai");

        selesai.textContent = item.classList.contains("selesai")
            ? "Batalkan selesai"
            : "Tandai selesai";
    });

    item.append(label, selesai, hapus);
    daftarTugas.appendChild(item);

    inputTugas.value = "";
    pesanTugas.textContent = "Tugas ditambahkan.";

    inputTugas.focus();
});

// Mengambil elemen mini project
const formWorkshop = document.getElementById("formWorkshop");
const namaWorkshop = document.getElementById("namaWorkshop");
const emailWorkshop = document.getElementById("emailWorkshop");
const sesiWorkshop = document.getElementById("sesiWorkshop");
const jumlahNama = document.getElementById("jumlahNama");
const ringkasanSesi = document.getElementById("ringkasanSesi");
const pesanWorkshop = document.getElementById("pesanWorkshop");

// Menghitung karakter nama
namaWorkshop.addEventListener("input", function () {
    jumlahNama.textContent = namaWorkshop.value.length;
});

// Menampilkan sesi yang dipilih
sesiWorkshop.addEventListener("change", function () {
    if (sesiWorkshop.value === "") {
        ringkasanSesi.textContent = "Belum ada sesi yang dipilih.";
    } else {
        ringkasanSesi.textContent =
            "Sesi yang dipilih: " + sesiWorkshop.value;
    }
});

// Validasi form workshop
formWorkshop.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = namaWorkshop.value.trim();
    const email = emailWorkshop.value.trim();
    const sesi = sesiWorkshop.value;

    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama.length < 3) {
        pesanWorkshop.textContent =
            "Nama wajib diisi minimal 3 karakter.";
    } else if (!polaEmail.test(email)) {
        pesanWorkshop.textContent =
            "Masukkan alamat email yang valid.";
    } else if (sesi === "") {
        pesanWorkshop.textContent =
            "Silakan pilih sesi workshop.";
    } else {
        pesanWorkshop.textContent =
            "Pendaftaran berhasil! " +
            "Nama: " + nama +
            " | Email: " + email +
            " | Sesi: " + sesi;
    }
});

// Mengatur ulang form
formWorkshop.addEventListener("reset", function () {
    jumlahNama.textContent = "0";
    ringkasanSesi.textContent = "Belum ada sesi yang dipilih.";
    pesanWorkshop.textContent = "";
});

const paragrafEksperimen = document.getElementById("paragrafEksperimen");
const tombolParagraf = document.getElementById("tombolParagraf");

tombolParagraf.addEventListener("click", function () {
    paragrafEksperimen.classList.toggle("sembunyi");

    if (paragrafEksperimen.classList.contains("sembunyi")) {
        tombolParagraf.textContent = "Tampilkan Paragraf";
    } else {
        tombolParagraf.textContent = "Sembunyikan Paragraf";
    }
});