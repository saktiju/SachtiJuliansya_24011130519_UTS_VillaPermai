// Data Vila (Array of Objects)
const dataVila = [
    {
        id: 1,
        nama: "Vila Permai 1 (Tipe A)",
        tipe: "3 Kamar Tidur",
        lokasi: "Puncak Pass",
        harga: 1200000,
        fasilitas: ["Kolam Renang Private", "Wifi", "Dapur Lengkap", "BBQ Area"],
        tersedia: true
    },
    {
        id: 2,
        nama: "Vila Permai 2 (Tipe B)",
        tipe: "2 Kamar Tidur",
        lokasi: "Cisarua",
        harga: 850000,
        fasilitas: ["View Gunung", "Wifi", "Karaoke", "Taman Wide"],
        tersedia: true
    },
    {
        id: 3,
        nama: "Vila Permai 3 (Tipe C)",
        tipe: "4 Kamar Tidur",
        lokasi: "Cipayung",
        harga: 1750000,
        fasilitas: ["Kolam Renang Private", "Billiard", "Wifi", "Gazebo"],
        tersedia: false
    }
];

// Inisialisasi Event Listener saat DOM loaded
document.addEventListener("DOMContentLoaded", () => {
    try {
        renderVilaList(dataVila);
        populateDropdownVila(dataVila);
        loadNamaTamuTersimpan();

        document.getElementById("btnCek").addEventListener("click", hitungTotalHarga);
        document.getElementById("bookingForm").addEventListener("submit", prosesPemesanan);
        document.getElementById("searchInput").addEventListener("input", filterVila);
    } catch (error) {
        console.error("Terjadi kesalahan saat memuat halaman:", error);
    }
});

// Fungsi 1: Render Daftar Vila Secara Dinamis (createElement & appendChild)
function renderVilaList(listVila) {
    const container = document.getElementById("villaList");
    container.innerHTML = "";

    if (listVila.length === 0) {
        container.innerHTML = "<p>Vila yang Anda cari tidak ditemukan.</p>";
        return;
    }

    listVila.forEach(vila => {
        const article = document.createElement("article");
        article.classList.add("villa-card");

        const title = document.createElement("h4");
        title.classList.add("villa-card__title");
        title.textContent = vila.nama;

        const detail = document.createElement("p");
        detail.textContent = `Tipe: ${vila.tipe} | Lokasi: ${vila.lokasi}`;

        const price = document.createElement("p");
        price.classList.add("villa-card__price");
        price.textContent = `Rp ${vila.harga.toLocaleString("id-ID")} / malam`;

        const fasilitas = document.createElement("p");
        fasilitas.textContent = `Fasilitas: ${vila.fasilitas.join(", ")}`;

        const status = document.createElement("span");
        status.classList.add("villa-card__status");
        if (vila.tersedia) {
            status.classList.add("status--tersedia");
            status.textContent = "Tersedia";
        } else {
            status.classList.add("status--penuh");
            status.textContent = "Penuh / Dipesan";
        }

        article.appendChild(title);
        article.appendChild(detail);
        article.appendChild(price);
        article.appendChild(fasilitas);
        article.appendChild(status);

        container.appendChild(article);
    });
}

// Populate Select Option Vila
function populateDropdownVila(listVila) {
    const select = document.getElementById("pilihanVila");
    select.innerHTML = '<option value="">-- Pilih Vila --</option>';

    listVila.forEach(vila => {
        if (vila.tersedia) {
            const option = document.createElement("option");
            option.value = vila.id;
            option.textContent = `${vila.nama} - Rp ${vila.harga.toLocaleString("id-ID")}/malam`;
            select.appendChild(option);
        }
    });
}

// Fungsi 2: Perhitungan Otomatis Total Biaya
function hitungTotalHarga() {
    const vilaId = parseInt(document.getElementById("pilihanVila").value);
    const checkIn = new Date(document.getElementById("checkIn").value);
    const checkOut = new Date(document.getElementById("checkOut").value);
    
    if (!validasiForm(false)) return 0;

    const diffTime = Math.abs(checkOut - checkIn);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    const selectedVila = dataVila.find(v => v.id === vilaId);
    const total = diffDays * selectedVila.harga;

    document.getElementById("totalMalam").textContent = diffDays;
    document.getElementById("totalHarga").textContent = `Rp ${total.toLocaleString("id-ID")}`;

    return total;
}

// Fungsi 3: Validasi Form Pemesanan
function validasiForm(isSubmit = true) {
    const errorDiv = document.getElementById("errorMessage");
    errorDiv.style.display = "none";
    errorDiv.textContent = "";

    const nama = document.getElementById("namaTamu").value.trim();
    const vilaId = document.getElementById("pilihanVila").value;
    const checkInVal = document.getElementById("checkIn").value;
    const checkOutVal = document.getElementById("checkOut").value;
    const jumlahTamu = parseInt(document.getElementById("jumlahTamu").value);

    const checkIn = new Date(checkInVal);
    const checkOut = new Date(checkOutVal);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (isSubmit && !nama) {
        showError("Nama pemesan wajib diisi.");
        return false;
    }

    if (!vilaId) {
        showError("Silakan pilih vila terlebih dahulu.");
        return false;
    }

    if (!checkInVal || !checkOutVal) {
        showError("Tanggal check-in dan check-out wajib dipilih.");
        return false;
    }

    if (checkIn < today) {
        showError("Tanggal check-in tidak boleh di masa lalu.");
        return false;
    }

    if (checkOut <= checkIn) {
        showError("Tanggal check-out harus setelah tanggal check-in.");
        return false;
    }

    if (jumlahTamu < 1 || jumlahTamu > 10) {
        showError("Jumlah tamu harus di antara 1 sampai 10 orang.");
        return false;
    }

    return true;
}

function showError(msg) {
    const errorDiv = document.getElementById("errorMessage");
    errorDiv.textContent = msg;
    errorDiv.style.display = "block";
}

// Fungsi 4: Proses Submit Pesanan & Save LocalStorage
function prosesPemesanan(event) {
    event.preventDefault();

    if (!validasiForm(true)) return;

    const totalBiaya = hitungTotalHarga();
    const nama = document.getElementById("namaTamu").value.trim();
    const vilaId = parseInt(document.getElementById("pilihanVila").value);
    const vila = dataVila.find(v => v.id === vilaId);

    // Menyimpan nama tamu terakhir ke localStorage
    localStorage.setItem("lastGuestName", nama);

    const resultBox = document.getElementById("detailPesanan");
    resultBox.innerHTML = `
        <p><strong>Terima kasih, ${nama}!</strong> Pemesanan Anda telah berhasil dicatat.</p>
        <p>Vila: ${vila.nama}</p>
        <p>Total Malam: ${document.getElementById("totalMalam").textContent} malam</p>
        <p>Total Pembayaran: <strong>Rp ${totalBiaya.toLocaleString("id-ID")}</strong></p>
        <p><em>Silakan konfirmasi ke Pak Hendra melalui WA dengan menunjukkan bukti ini.</em></p>
    `;

    document.getElementById("hasilPesanan").classList.remove("hidden");
}

// Fungsi 5: Filter/Pencarian Vila
function filterVila() {
    const keyword = document.getElementById("searchInput").value.toLowerCase();
    const filtered = dataVila.filter(vila => 
        vila.nama.toLowerCase().includes(keyword) || 
        vila.fasilitas.some(f => f.toLowerCase().includes(keyword))
    );
    renderVilaList(filtered);
}

// Fungsi 6: Load LocalStorage
function loadNamaTamuTersimpan() {
    const savedName = localStorage.getItem("lastGuestName");
    if (savedName) {
        document.getElementById("namaTamu").value = savedName;
    }
}