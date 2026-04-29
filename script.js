// ambil data dari localStorage
function getData() {
    return JSON.parse(localStorage.getItem("anggota")) || [];
}

// simpan data ke localStorage
function saveData(data) {
    localStorage.setItem("anggota", JSON.stringify(data));
}

// tampilkan data di index.html
function tampilkanData() {
    const tabel = document.getElementById("dataAnggota");
    if (!tabel) return;

    const anggota = getData();
    tabel.innerHTML = "";

    anggota.forEach(item => {
        tabel.innerHTML += `
        <tr>
            <td>${item.nama}</td>
            <td>${item.email}</td>
            <td>${item.minat}</td>
        </tr>`;
    });
}

// handle submit form
function tambahData(event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const minat = document.getElementById("minat").value;

    let anggota = getData();

    anggota.push({ nama, email, minat });

    saveData(anggota);

    alert("Data berhasil disimpan!");

    // pindah ke home
    window.location.href = "index.html";
}