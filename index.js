//Bài 1:
document.getElementById('btn-B1').onclick = function () {
    // input: tienLuong1h, soNgayLam: number 
    let tienLuong1h = +document.getElementById('tienLuong1h-B1').value;
    let soNgayLam = +document.getElementById('soNgayLam-B1').value;

    //output : ketQua: string; tienLuong: number
    let tienLuong = 0;
    let ketQua = '';

    //progress:
    tienLuong = tienLuong1h * soNgayLam;
    ketQua = 'Tiền lương bạn nhận được: ' + tienLuong.toLocaleString();
    document.getElementById('ketQua-B1').innerHTML = ketQua; 

}

// Bài 2: 
document.getElementById('btn-B2').onclick = function (){
    //input: 5 số thực: number
    let soThuc1 = +document.getElementById('soThuc1-B2').value;
    let soThuc2 = +document.getElementById('soThuc2-B2').value;
    let soThuc3 = +document.getElementById('soThuc3-B2').value;
    let soThuc4 = +document.getElementById('soThuc4-B2').value;
    let soThuc5 = +document.getElementById('soThuc5-B2').value;

    //output: trungBinhCong: number; ketQua: string
    let trungBinhCong = 0;
    let ketQua = '';

    // progress 
    trungBinhCong = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;
    ketQua = 'Trung bình cộng của 5 số thực trên: ' + trungBinhCong;
    document.getElementById('ketQua-B2').innerHTML = ketQua;

}


// Bài 3 :
document.getElementById('btn-B3').onclick = function (){
    // input : tyGia , soTienUsd: number
    let tyGia = +document.getElementById('tyGia-B3').value;
    let soTienUsd = +document.getElementById('soTienUsd-B3').value;

    //output: soTienViet: number; ketQua: string
    let soTienViet = 0;
    let ketQua = '';

    //progress
    soTienViet = soTienUsd * tyGia;
    ketQua = 'Số tiền Việt được bạn quy đổi: ' + soTienViet.toLocaleString() + ' (VND)';
    document.getElementById('ketQua-B3').innerHTML = ketQua;
}

//Bài 4:
document.getElementById('btn-B4').onclick = function (){
    // input : chieuDai, chieuRong: number
    let chieuDai = +document.getElementById('chieuDai-B4').value;
    let chieuRong = +document.getElementById('chieuRong-B4').value;

    // output: dienTich, chuVi: Number; ketQua1, ketQua2: string 
    let dienTich = 0;
    let chuVi = 0;
    let ketQua1 = '';
    let ketQua2 = '';

    // progress: 
    dienTich = chieuDai * chieuRong;
    chuVi = (chieuDai + chieuRong) * 2;
    ketQua1 = 'Diện tích của hình chữ nhật: ' + dienTich;
    ketQua2 = 'Chu vi của hình chữ nhật: ' + chuVi;
    document.getElementById('ketQua1-B4').innerHTML = ketQua1;
    document.getElementById('ketQua2-B4').innerHTML = ketQua2;

}

//Bài 5:
document.getElementById('btn-B5').onclick = function (){
    // input : so2KySo: number
    let so2KySo = +document.getElementById('so2KySo-B5').value;

    //output: tong2KySo: number, ketQua: string
    let tong2KySo = 0;
    let ketQua = '';

    //progress:
    let hangChuc = Math.floor(so2KySo / 10);
    let hangDonVi = so2KySo % 10;
    tong2KySo = hangChuc + hangDonVi;
    ketQua = 'Tổng 2 chữ số của số tự nhiên trên: ' + tong2KySo;
    document.getElementById('ketQua-B5').innerHTML = ketQua;
}
