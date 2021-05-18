//Bài 1: Tính tiền lương nhân viên
/*
    B1: Input
    - luongMotNgay, soNgayLam
    
    B2: Handle
    - Tạo biến luongMotNgay, soNgayLam,, luongThucNhan
    - Tính lương thực nhận: luongThucNhan = luongMotNgay * soNgayLam
    B3:Output
    - Xuất lương thực nhận
*/
console.log('======= BÀI 1 ======');
var luongMotNgay = 100000;
var soNgayLam = 23;
var luongThucNhan;

luongThucNhan = luongMotNgay * soNgayLam;

console.log('Luong mot ngay: ' + luongThucNhan);
console.log('====================')

//Bài 2: Tính giá trị trung bình
/*
    B1: Input
    - Giá trị của 5 số thực
    B2: Handle
    - Tạo 5 biến chứa giá trị 5 số thực a,b,c,d,e
    - Một biến kết quả average
    - Tính giá trị trung bình: average = (a+b+c+d+e)/5
    B3: Output
    Xuất giá trị trung bình
 */
console.log('======= BÀI 2 ======');
var a = 1;
var b = 2;
var c = 3;
var d = 4;
var e = 5;
var average;

average = (a+b+c+d+e)/5

console.log('Gia tri trung binh: ' + average);
console.log('====================');
// Bài 3: Quy đổi tiền
/*
    B1: Input
    - Giá trị USD hiện nay
    - Số USD muốn quy đổi
    B2: Handle
    - Tạo biến giaTriUSD,soTienCanQuyDoi,soTienSauQuyDoi
    - soTienSauQuyDoi = giatriUSD * soTienCanQuyDoi
    B3: Output
    Xuất số tiền sau quy đổi
*/
console.log('======= BÀI 3 ======');
var giaTriUSD = 23500;
var soTienCanQuyDoi = 2;
var soTienSauQuyDoi;

soTienSauQuyDoi = giaTriUSD * soTienCanQuyDoi;

console.log('So tien sau quy doi: ' + soTienSauQuyDoi + ' VNĐ');
console.log('====================');
//Bài 4: Tính chu vi diện tích hình chữ nhật
/*
    B1: Input
    - Chiều dài và chiều rộng hình chữ nhật
    B2: Handle
    - Tạo biến chieuDai, chieuRong, chuVi, dienTich
    - Tính chuVi = (chieuDai + chieuRong) * 2
    - Tính dienTich = chieuDai * chieuRong
    B3: Output
    Xuất Chu vi, Diện tích hình chữ nhật

*/
console.log('======= BÀI 4 ======');
var chieuDai = 10;
var chieuRong = 5;
var chuVi;
var dienTich;

chuVi = (chieuDai + chieuRong) * 2;
dienTich = chieuDai * chieuRong;

console.log('Chu vi : ' + chuVi);
console.log('Dien Tich : ' + dienTich);
console.log('====================');

//Bài 5: Tính tổng 2 kí số
/*
    B1: Input
    - Số có hai chữ số
    B2: Handle
    - Tạo biến chứa giá trị số có 2 chữ số : soHaiChuSo
    - Tạo biến chứa chữ số hang đơn vị: chuSoHangDonVi
    - Tạo biến chứa chữ số hàng chục: chuSoHangChuc
    - Tạo biến chứa tổng 2 kí số: tongHaiKiSo
    - Lấy chữ số hàng đơn vị: chuSoHangDonVi = soHaiChuSo % 10
    - Lấy chữ số hàng chục: chuSoHangChuc = soHaiChuSo / 10
    - Tính tổng 2 kí số: tongHaiKiSo = chuSoHangDonVi + chuSoHangChuc
    B3: Output
    Xuất tổng 2 kí số

*/

console.log('======= BÀI 5 ======');

var soHaiChuSo = 34;
var chuSoHangDonVi;
var chuSoHangChuc;
var tongHaiKiSo;

chuSoHangDonVi = soHaiChuSo % 10;
chuSoHangChuc = parseInt(soHaiChuSo / 10) ;

tongHaiKiSo = chuSoHangDonVi + chuSoHangChuc;
console.log('Tong hai ki so: ' + tongHaiKiSo);

console.log('====================');