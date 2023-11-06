//* Bài Tập 1
var btnTinhLuong = document.getElementById("btnTinhLuong");
btnTinhLuong.onclick = function (){
    var luong1Ngay = document.getElementById("luong1Ngay").value;
    var soNgayLam = document.getElementById("soNgayLam").value;

 var luong = luong1Ngay * soNgayLam

 var result = (luong);
    


 var pLuong = document.getElementById("pLuong");
 pLuong.innerHTML = result;


 }

 //* Bài Tập 2:
 var btnTrungBinh = document.getElementById("btnTrungBinh");
 btnTrungBinh.onclick = function(){
    var soThu_1 = document.getElementById("soThu_1").value * 1;
    var soThu_2 = document.getElementById("soThu_2").value * 1;
    var soThu_3 = document.getElementById("soThu_3").value * 1;
    var soThu_4 = document.getElementById("soThu_4").value * 1 ;
    var soThu_5 = document.getElementById("soThu_5").value * 1;

    var trungBinh = (soThu_1 + soThu_2 + soThu_3 + soThu_4 + soThu_5)/ 5;
    
    var result = (trungBinh);
    var pTrungBinh = document.getElementById("pTrungBinh");
    pTrungBinh.innerHTML = result;

 }

 //* Bài Tập 3:

 const usdToVndExchangeRate = 23500;

    // Lấy tham chiếu đến các phần tử trên giao diện
    const convertButton = document.getElementById('convertButton');
    const pQuyDoi = document.getElementById('PQuyDoi');

    convertButton.onclick = function () {
        const usdAmountInput = document.getElementById('usdAmount').value;

        // Kiểm tra xem người dùng đã nhập một số hợp lệ hay không
        if (!isNaN(usdAmountInput)) {
            // Tính số tiền quy đổi ra VND
            const vndAmount = usdAmountInput * usdToVndExchangeRate;

            // Sử dụng NumberFormat để hiển thị số tiền đẹp hơn
            const formatter = new Intl.NumberFormat('vn-VN');
            const formattedVndAmount = formatter.format(vndAmount);

            // Hiển thị kết quả
            pQuyDoi.textContent = `${usdAmountInput} USD quy đổi ra ${formattedVndAmount} VND`;
        } else {
            pQuyDoi.textContent = 'Vui lòng nhập một số tiền USD hợp lệ.';
        }
    };

 //* Bài Tập 4:
 var btnTinh = document.getElementById("btnTinh");
btnTinh.onclick = function () {
    var chieuDai = document.getElementById("chieuDai").value * 1;
    var chieuRong = document.getElementById("chiẻuRong").value * 1;

    var chuVi = (chieuDai + chieuRong) * 2;
    var dienTich = chieuDai * chieuRong;

    var pTinh = document.getElementById("pTinh");
    pTinh.innerHTML = "Chu vi: "  + chuVi + " ; Diện tích: " + dienTich;
 }

 //* Bài Tập 5:
 var btnTinhTong = document.getElementById("tinhTong");
 btnTinhTong.onclick = function () {
     var inputSo = document.getElementById("so");
     var ketQua = document.getElementById("ketQua");

     
    
         var so = parseInt(inputSo.value);
         var soHangChuc = Math.floor(so / 10);
         var soHangDonVi = so % 10;
         var tong = soHangChuc + soHangDonVi;
         ketQua.innerHTML = "Tổng của hai chữ số của số " + so + " là " + tong;
};


