function tampilkanNilai() {
    var nim = document.getElementById('nim').value;
    var nama = document.getElementById('nama').value;
    var matkul = document.getElementById('matkul').value;
    var nilai = document.getElementById('nilai').value;

    // Logika penentuan huruf dan indeks nilai
    var huruf, indeks;
    if (nilai >= 80) {
        huruf = 'A';
        indeks = 'Pujian';
    } else if (nilai >= 70) {
        huruf = 'B';
        indeks = 'Sangat Memuaskan';
    } else if (nilai >= 60) {
        huruf = 'C';
        indeks = 'Sangat Memuaskan';
    } else if (nilai >= 50) {
        huruf = 'D';
        indeks = 'Memuaskan';
    } else {
        huruf = 'E';
        indeks = 'Memuaskan';
    }

    // Menampilkan hasil di dalam div 'hasil'
    document.getElementById('hasilNIM').innerText = 'NIM: ' + nim;
    document.getElementById('hasilNama').innerText = 'Nama: ' + nama;
    document.getElementById('hasilMatkul').innerText = 'Mata Kuliah: ' + matkul;
    document.getElementById('hasilNilai').innerText = 'Nilai Akhir: ' + nilai;
    document.getElementById('hasilHuruf').innerText = 'Nilai Huruf: ' + huruf;
    document.getElementById('hasilIndeks').innerText = 'Indeks Nilai: ' + indeks;

    // Menampilkan foto (jika ada)
    var foto = document.getElementById('foto').files[0];
    if (foto) {
        var reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('preview').src = e.target.result;
        };
        reader.readAsDataURL(foto);
    }

    // Menampilkan hasil
    document.getElementById('hasil').style.display = 'block';
}

function resetForm() {
    document.getElementById('nilaiForm').reset();
    document.getElementById('hasil').style.display = 'none';
    document.getElementById('preview').src = '';
}
