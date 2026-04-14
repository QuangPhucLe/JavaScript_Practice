// 1. Cấu hình để bắt lệnh console.log
const display = document.getElementById('console-display');
const nativeLog = console.log; // Giữ lại hàm log gốc của trình duyệt

console.log = function (...args) {
    // Gọi lại hàm log gốc để ông vẫn xem được trong F12 nếu muốn
    nativeLog.apply(console, args);

    // Chuyển kết quả thành chuỗi và hiển thị lên Web
    const output = args.map(arg => 
        typeof arg === 'object' ? JSON.stringify(arg, null, 2) : arg
    ).join(' ');

    display.textContent += "> " + output + "\n";
};

// --- BẮT ĐẦU VIẾT CODE BÀI TẬP CỦA ÔNG DƯỚI ĐÂY ---
// console.log("Hello World!");
// ----------------------------------------------------------------------------------------------

// console.log("Bai 1");
// function bmi(kg,m)  {
//     return kg / (m*2);
// }
// console.log("BMI cua ban la " + bmi(75,1.75));
// ----------------------------------------------------------------------------------------------

// console.log("Bai 2");
// function letter(nameUser, nameEvent, time, location)    {
//     return `Kinh moi ${nameUser} tham du ${nameEvent} vao luc ${time} dia diem tai ${location}`;
// }
// console.log(letter("Quang Phuc", "le tot nghiep", "9:00 AM", "Dai Hoc Van Lang"));
// ----------------------------------------------------------------------------------------------

// console.log("Bai 3");

// function kiemTraSoDu(so_Du, tien_Rut)   {
//     if (so_Du < tien_Rut) {
//         console.log("So du khong du de thuc hien giao dich");
//     }
//     else {
//         console.log("Rut tien thanh cong");
//     }
// }
// console.log(kiemTraSoDu( 500, 501));
// ----------------------------------------------------------------------------------------------


// console.log("Bai 4")
// function loaiRac(loai)  {
//     switch(loai)    {
//         case "chai nhua":
//         case "lon nhom":
//             console.log("Rac tai che");
//             break;
//         case "thuc an thua":
//         case "la cay":
//             console.log("Rac huu co");
//             break;
//         default:
//             console.log("Rac con lai");
//             break;
//     }
// }
// console.log(loaiRac("lon nhom"));
// ----------------------------------------------------------------------------------------------

// console.log("Bai 5");
// function kiemTraHocLuc(diemThi) {
//     if (diemThi >= 8){
//         return "Gioi";
//     }
//     else if (diemThi >= 6.5) {
//         return "Kha";
//     }
//     else if (diemThi >= 5)  {
//         return "Tung binh"
//     }
//     else {
//         return "Yeu"
//     }
// }
// console.log(kiemTraHocLuc(8));
// console.log(kiemTraHocLuc(6.5));
// console.log(kiemTraHocLuc(5));
// console.log(kiemTraHocLuc(2));
// ----------------------------------------------------------------------------------------------

// console.log("Da lam xong bai tap co ban 4/8/2026");
// function ticketPrice(age, StudentID){
//     const price = 100000;
//     if (age <= 12)    {
//         return price * 0.5;
//     }
//     else if (age >= 60)    {
//         return price * 0.7;
//     }
//     else if (StudentID === true)    {
//         return price * 0.8;
//     }
//     else    {
//         return price;
//     }
// }
// ----------------------------------------------------------------------------------------------

// function ticketPrice(tuoi, coTheSinhVien) {
//     const giaGoc = 100000;
//     let mucGiam = 0; // Lưu tỷ lệ giảm giá (ví dụ 0.5 là giảm 50%)

//     // Bước 1: Kiểm tra các diện ưu tiên để tìm mức giảm cao nhất
    
//     if (tuoi < 12) {
//         mucGiam = 0.5; // Ưu tiên cao nhất cho trẻ em
//     } else if (tuoi > 60) {
//         mucGiam = 0.3; // Ưu tiên cho người già
//     } else if (coTheSinhVien === true) {
//         mucGiam = 0.2; // Ưu tiên cho sinh viên
//     }

//     // Bước 2: Tính toán giá cuối cùng
//     const giaCuoi = giaGoc * (1 - mucGiam);

//     // Bước 3: Trả về chuỗi nội suy
//     return `Giá vé của bạn là: ${giaCuoi.toLocaleString()} VNĐ`; 
//     // .toLocaleString() giúp định dạng 100000 thành 100.000 cho dễ đọc
// }

// // Chạy thử các trường hợp:
// console.log(ticketPrice(10, true));  // Trẻ em (giảm 50%) mặc dù có thẻ SV
// console.log(ticketPrice(20, true));  // Sinh viên (giảm 20%)
// console.log(ticketPrice(65, false)); // Người già (giảm 30%)
// console.log(ticketPrice(30, false)); // Người bình thường (không giảm)
// ----------------------------------------------------------------------------------------------

// function caculator(a,b,phepTinh) {
//     switch (true)   {
//         case phepTinh === "+":
//             return a + b;
//         case phepTinh === "-":
//             return a - b;
//         case phepTinh === "*":
//             return a * b;
//         case phepTinh === "/":
//             if (b === 0)    {
//                 return "Khong the chia het cho so 0."
//             }
//             else    {
//                 return a / b;
//             } 
//         default:
//             return "Phep tinh khong ho tro."
//     }
// }

// console.log(caculator(2,0,"/"));
// ----------------------------------------------------------------------------------------------

// function  checkPassword(pass)   {
//     const a = pass.length  >= 8;
//     const b = pass.includes("!") || pass.includes("@");
//     if (a && b) {
//         return "Mat khau manh";
//     }
//     else if (a || b)    {
//         return "Mat khau trung binh";
//     }
//     else    {
//         return "Mat khau yeu";
//     }
// }
// console.log(checkPassword("QuangPhuc9999!!!!"));
// ----------------------------------------------------------------------------------------------
// function  checkPassword(pass)   {
//     const a = pass.length  >= 8;
//     const b = pass.includes("!") || pass.includes("@");
//     if (a && b) return "Manh";
//     else if (a || b) return "Trung binh";
//     else return "Yeu";
// }
// const danhSachPass = ["123", "password!", "phuc2026@", "admin", "fullstack_dev!"];
// for (let i = 0; i < danhSachPass.length; i++)   {
//     const mk = danhSachPass[i];
//     const ketQua = checkPassword(mk);
// console.log(`${i + 1}. Mật khẩu [${mk}] là: ${ketQua}`);
// }

// ----------------------------------------------------------------------------------------------

// function thanhToan(gioHang, maGiamGia)  {
//     let tongTien = 0;
//     let quaTang = "Khong co qua tang";
    
//     for (let i = 0; i < gioHang.length; i++)    {
//         tongTien += gioHang[i];
//     }

//     switch(maGiamGia)   {
//         case "GIAM20%":
//             tongTien = tongTien*0.8;
//             break;
//         case "FREESHIP":
//             tongTien = tongTien - 30000;
//             break;
//         default:
//             break;
//     }

//     if (tongTien >= 500000) {
//         quaTang = "Phieu mua hang 50.000VND";
//     }

//     if (tongTien <= 30000)  {
//         tongTien = 0;
//     }

//     return `-----Hoa Don Cua Ban-----
//     Tổng tiền thanh toán: ${tongTien.toLocaleString()} VNĐ    
//     Ma giam gia: ${maGiamGia || "Khong Co"}
//     Quan tang: ${quaTang}
//     -----Cam on quy khach----- `;
// }
// const myCart = [150000, 200000, 300000, 50000]; // Tổng 700k
// console.log(thanhToan(myCart, "GIAM20%"));
// console.log(thanhToan([5000000], "GIAM20%"));


// // 1. Chọn phần tử
// const box = document.getElementById('main-box');

// // 2. Thiết lập kích thước ban đầu bằng JS
// box.style.width = "30px";
// box.style.height = "30px";
// box.style.backgroundColor = "orange";
// box.style.transition = "0.3s"; // Thêm chút hiệu ứng mượt mà

// // 3. Xử lý sự kiện di chuột vào
// box.addEventListener('mouseover', () => {
//     box.style.backgroundColor = "red";
//     box.style.borderRadius = "50%"; // Biến thành hình tròn cho vui
// });

// // 4. Xử lý sự kiện di chuột ra
// box.addEventListener('mouseout', () => {
//     box.style.backgroundColor = "orange";
//     box.style.borderRadius = "0%"; // Trở lại hình vuông
// });

//----------------------------------------------------------------------------------------------
// function reverseString(str) {
//   let result = "";
//   // Duyệt từ index cuối (str.length - 1) về 0
//   for (let i = str.length - 1; i >= 0; i--) {
//     console.log(i);
//     result += str[i];
//   }
//   return result;
// }

// console.log(reverseString("Hello Phuc")); // "cuhP olleH"
//----------------------------------------------------------------------------------------------

// function flattenArray(arr) {
//   let result = [];
  
//   arr.forEach(item => {
//     if (Array.isArray(item)) {
//       // Nếu là mảng, dùng spread operator để gộp kết quả đệ quy
//       result.push(...flattenArray(item));
//     } else {
//       result.push(item);
//     }
//   });
  
//   return result;
// }

// const messyArr = [1, [2, [3, 4], 5], 6];
// console.log(flattenArray(messyArr)); // [1, 2, 3, 4, 5, 6]
//----------------------------------------------------------------------------------------------
// const projects = [
//   { name: "Web bán hàng", tech: "HTML" },
//   { name: "App thời tiết", tech: "JS" },
//   { name: "Portfolio cá nhân", tech: "JS" }
// ];

// function filterProjects(techName) {
//   // 1. Tạo một mảng trống để chứa các kết quả thỏa mãn
//   var results = [];

//   // 2. Dùng vòng lặp for truyền thống để duyệt qua từng project
//   for (var i = 0; i < projects.length; i++) {
//     var currentProject = projects[i];

//     // 3. Kiểm tra xem tech của project hiện tại có khớp với techName cần tìm không
//     if (currentProject.tech === techName) {
//       // 4. Nếu khớp thì "đẩy" vào mảng results
//       results.push(currentProject);
//     }
//   }

//   // 5. Trả về mảng kết quả sau khi đã lọc xong
//   return results;
// }

// // Chạy thử
// var jsProjects = filterProjects("JS");
// console.log(jsProjects);
//----------------------------------------------------------------------------------------------

// var twoSum = function(nums, target) {
//     let left = 0;                 // Start index
//     let right = nums.length - 1;  // End index

//     while (left < right) {        // Continue until pointers meet
//         let sum = nums[left] + nums[right];

//         if (sum === target) {
//             return [left, right]; // Found the pair!
//         } 
        
//         if (sum > target) {
//             right--;              // Sum too big? Move the right pointer left
//         } else {
//             left++;               // Sum too small? Move the left pointer right
//         }
//     }
//     return []; // No pair found
// };

// const nums = [1, 2, 3, 4, 6, 7, 8];
// console.log(twoSum(nums, 3)); // Output: [0, 1] (Indices of 1 and 2)
// // ----------------------------------------------------------------------------------------------
// var twoSum = function(nums, target) {
//     let map = {}; // Dùng để lưu: { giá_trị: chỉ_số }

//     for (let i = 0; i < nums.length; i++) {
//         let complement = target - nums[i]; // Số còn thiếu để đủ target
        
//         // Kiểm tra xem số còn thiếu này đã xuất hiện trước đó chưa
//         if (complement in map) {
//             return [map[complement], i];
//         }
        
//         // Nếu chưa, lưu số hiện tại vào map để các số sau kiểm tra
//         map[nums[i]] = i;
//     }
//     return []; // Trả về mảng rỗng thay vì null
// };

//----------------------------------------------------------------------------------------------