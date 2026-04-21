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

//----------------------------------------------------------------------------------------------


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

// function checkAge(age) {
//     if (age >= 6 && age <= 18){
//         return "Ban nam trong do tuoi di hoc";
//     }
//     else {
//         return "Ban khong nam trong do tuoi di hoc";
//     }
// }
// console.log(checkAge(6));
// console.log(checkAge(8));

// function checkAge(age) {
//     age >= 6 && age <= 18
//     ? console.log("Ban nam trong do tuoi di hoc")
//     : console.log("Ban khong nam trong do tuoi di hoc");
// }
// checkAge(6);

// ----------------------------------------------------------------------------------------------
// function isHealthy(heartRate, temperature) {
//     heartRate > 60 && heartRate < 100 && temperature >= 36.5 && temperature <= 37.5
//     ? console.log("Ban dang o trang thai suc khoe tot")
//     : console.log("Ban dang o trang thai suc khoe khong tot");
// }
// isHealthy(70, 37);

// ----------------------------------------------------------------------------------------------

// function checkJoinCondition(age, job, enrollEvent) {
//     age >= 18 && job === "IT" && enrollEvent === true
//     ? console.log("Du dieu kien tham gia.")
//     : console.log("Khong du dieu kien tham gia.");
// }

// checkJoinCondition(20, "IT", true);
// checkJoinCondition(18, "IT", false);

// function checkJoinCondition(age, job, enrollEvent) {
//     if (age >= 18 && job === "IT" && enrollEvent === true) {
//         console.log("Du dieu kien tham gia.");
//     } else {
//         console.log("Khong du dieu kien tham gia.");
//     }
// }

// checkJoinCondition(20, "IT", true);
// checkJoinCondition(18, "IT", false);

// function checkJoinCondition(age, IT, joinedEvent) {
//     if (age >= 18 && IT && joinedEvent) {
//         return "Du dieu kien tham gia.";
//     } else {
//         return "Khong du dieu kien tham gia.";
//     }
// }
// console.log(checkJoinCondition(20, true, true));
// console.log(checkJoinCondition(18, true, false));

// ----------------------------------------------------------------------------------------------

// function canPurchaseCarInsurance(age, hasLicense, noAccidents) {
//     return age >= 18 && hasLicense && noAccidents
// }
// console.log(canPurchaseCarInsurance(25, true, true)); 
// console.log(canPurchaseCarInsurance(17, true, false)); 
//----------------------------------------------------------------------------------------------

// function canJoinSoccerTeam(age, hasExperience, medicalClearance) {
//     return age >= 18 && hasExperience && medicalClearance;
// }
// console.log(canJoinSoccerTeam(20, true, true));
// console.log(canJoinSoccerTeam(17, true, false));

// ----------------------------------------------------------------------------------------------

// function canJoinCookingClass(age, hasIngredients, signedUp) {
//     return age >= 18 && hasIngredients && signedUp;
// }       
// console.log(canJoinCookingClass(25, true, true));
// console.log(canJoinCookingClass(17, true, false));

// ----------------------------------------------------------------------------------------------

// function canOrganizeEvent(bandCount, enoughBudget, wheatherForecast) {
//     return bandCount >= 3 && enoughBudget && wheatherForecast !== "Rainy";
// }
// console.log(canOrganizeEvent(6, true, "Sunny")); //true
// console.log(canOrganizeEvent(2, true, "Rainy")); //false
// console.log(canOrganizeEvent(5, true, "Rainy")); //false

// ----------------------------------------------------------------------------------------------

// function canOpenNewShop(goodLocation, highAdBudget, experiencedStaff) {
//     return (goodLocation || highAdBudget) && experiencedStaff >= 3;
// }
// console.log(canOpenNewShop(true, false, 4)); //true
// console.log(canOpenNewShop(true, true, 1)); //false
// console.log(canOpenNewShop(false, true, 3)); //true

// ----------------------------------------------------------------------------------------------
// function isCapableProjectManager(experience, goodCommunication, knowledge) {
//     return experience >= 3 && goodCommunication && knowledge;
// }
// console.log(isCapableProjectManager(4, true, true)); //true
// console.log(isCapableProjectManager(2, true, true)); //false
// console.log(isCapableProjectManager(5, false, true)); //false

// ----------------------------------------------------------------------------------------------

// function investmentDecision(riskLevel, roi) {
//     if ((riskLevel === "Low" || riskLevel === "Medium") && roi > 0.1) {
//         return true;
//     }
//     else if (riskLevel === "High" && roi > 0.2) {
//         return true;
//     } 
//     else {
//         return false;
//     }
// }
// // Cách viết ngắn gọn hơn với toán tử logic:
// function investmentDecision(riskLevel, roi) {
//     return riskLevel !== "High" && roi > 0.1 || riskLevel === "High" && roi > 0.2;
// }

// console.log(investmentDecision("Medium", 0.12)); // true
// console.log(investmentDecision("Medium", 0.1)); // false
// console.log(investmentDecision("High", 0.2)); // false
// console.log(investmentDecision("High", 0.5)); // true

// ----------------------------------------------------------------------------------------------

// function determineTravelPlan(goodWeather, budget, loveAdventure) {
//     if (!goodWeather) {
//         return "O nha xem phim";
//     }
//     if  (goodWeather&& budget >= 5000 && loveAdventure) {
//         return "Du lich nui";
//     }
//     if (goodWeather && budget >= 5000 && !loveAdventure) {
//         return "Du lich bien";
//     }
//     if (goodWeather && budget < 5000) {
//         return "Kham pha dia phuong";
//     }
// }

// Cách viết ngắn gọn hơn với toán tử logic:

// function determineTravelPlan(goodWeather, budget, loveAdventure) {
//     if (!goodWeather) {
//         return "O nha xem phim";
//     }
//     if (goodWeather && budget >= 5000) {
//         if (loveAdventure) {
//             return "Du lich nui";
//         }
//         else {
//             return "Du lich bien";
//         }
//     }
//     if (goodWeather && budget < 5000) {
//         return "Kham pha dia phuong";
//     }
// }

// Cách viết ngắn gọn hơn với toán tử logic:

// function determineTravelPlan(goodWeather, budget, loveAdventure) {
//     if (!goodWeather) {
//         return "O nha xem phim";
//     }
//     if (goodWeather && budget >= 5000) {
//         return loveAdventure ? "Du lich nui" : "Du lich bien";
//     }
//     if (goodWeather && budget < 5000) {
//         return "Kham pha dia phuong";
//     }
// }

// Cách viết ngắn gọn hơn với toán tử logic:

// function determineTravelPlan(goodWeather, budget, loveAdventure) {
//     if (!goodWeather) {
//         return "O nha xem phim";
//     }
//     if (budget >= 5000) {
//         return loveAdventure ? "Du lich nui" : "Du lich bien";
//     }
//     return "Kham pha dia phuong";
// }

// console.log(determineTravelPlan(true, 6000, true));
// console.log(determineTravelPlan(true, 6000, false));
// console.log(determineTravelPlan(true, 3000, false));
// console.log(determineTravelPlan(false, 3000, false));
// console.log(determineTravelPlan(false, 6000, false));
// console.log(determineTravelPlan(false, 6000, true));

// ----------------------------------------------------------------------------------------------

// function determineStudentCategory(score, attendanceRate) {
//     // 1. Kiểm tra điều kiện tiên quyết (Vắng > 50%)
//     if (attendanceRate < 0.5) {
//         return "Cần cải thiện";
//     }
//     // 2. Kiểm tra Xuất sắc
//     if (score >= 90) {
//         return "Xuất sắc";
//     }
//     // 3. Kiểm tra Giỏi
//     if (score >= 75 && attendanceRate >= 0.7) {
//         return "Giỏi";
//     }
//     // 4. Kiểm tra Khá
//     if (score >= 60 && attendanceRate >= 0.6) {
//         return "Khá";
//     }
//     // 5. Các trường hợp còn lại là Trung bình
//     // (Bao gồm score < 60 HOẶC attendanceRate < 0.6 do các điều kiện trên đã loại trừ)
//     return "Trung bình";
// }

// console.log(determineStudentCategory(92, 0.85)); // Xuat Sac
// console.log(determineStudentCategory(80, 0.75));// Gioi
// console.log(determineStudentCategory(60, 0.65));// Kha
// console.log(determineStudentCategory(50, 0.65));// Trung binh
// console.log(determineStudentCategory(60, 0.5));//Trung binh
// console.log(determineStudentCategory(90, 0.4));// Can cai thien
// console.log(determineStudentCategory(59, 0.7));// Trung binh

// ----------------------------------------------------------------------------------------------

// function hasAccsessToWorkroom(isManager, hasKeycard, finishedTraining) {
//     if (isManager){
//         return true; // Quản lý luôn có quyền truy cập
//     }
//     if (!isManager && (hasKeycard && finishedTraining)) {
//         return true; // Nhân viên có thẻ từ và đã hoàn thành đào tạo
//     }
//     return false; // Các trường hợp còn lại không có quyền truy cập
// }

// Cách viết ngắn gọn hơn với toán tử logic:

// function hasAccsessToWorkroom(isManager, hasKeycard, finishedTraining) {
//     return isManager || (hasKeycard && finishedTraining);
// }


// console.log(hasAccsessToWorkroom(true, true, true));    //true
// console.log(hasAccsessToWorkroom(true, false, true));   //true
// console.log(hasAccsessToWorkroom(true, false, false));  //true
// console.log(hasAccsessToWorkroom(false, true, true));   //true
// console.log(hasAccsessToWorkroom(false, false, true));  //false
// console.log(hasAccsessToWorkroom(false, true, false));  //false

// ----------------------------------------------------------------------------------------------

// function calculateFlightTicket(basePrice, age, hasMemberCard, isHoliday) {
//     let finalPrice = basePrice;

//     // Bước 1: Tính giảm giá theo độ tuổi
//     // Code của bạn ở đây...
//     if (age < 6) {
//         finalPrice = 0; // Trẻ em dưới 6 tuổi miễn phí
//     }
//     if (age >= 6 && age <= 12) {
//         finalPrice *= 0.5; // Giảm 50% cho trẻ em từ 6-12 tuổi
//     }
//     if (age > 60) {
//         finalPrice *= 0.7; // Giảm 30% cho người già trên 60 tuổi
//     }
//     // Bước 2: Giảm giá thành viên (5%)
//     // Lưu ý: Chỉ giảm trên số tiền còn lại sau bước 1
//     // Code của bạn ở đây...
//     if (hasMemberCard === true) {
//         finalPrice *= 0.95; // Giảm 5% cho thành viên
//     }
//     // Bước 3: Tính phụ phí ngày lễ (25%)
//     // Code của bạn ở đây...
//     if (isHoliday === true) {
//         finalPrice *= 1.25; // Tăng 25% vào ngày lễ
//     }
//     return finalPrice;
// }

// // Chạy thử kiểm tra:
// console.log(calculateFlightTicket(1000, 10, true, false)); // Kỳ vọng: 475 (Giảm 50% còn 500, giảm tiếp 5% của 500)
// console.log(calculateFlightTicket(1000, 4, false, true));  // Kỳ vọng: 0 (Trẻ em dưới 6 tuổi miễn phí)
// console.log(calculateFlightTicket(1000, 25, false, true)); // Kỳ vọng: 1250 (Người lớn, ngày lễ tăng 25%)
// console.log(calculateFlightTicket(12000, 7, true, true)); // 
// ----------------------------------------------------------------------------------------------

// // Chạy thử kiểm tra:
// console.log(calculateFlightTicket(1000, 10, true, false)); // Kỳ vọng: 475 (Giảm 50% còn 500, giảm tiếp 5% của 500)
// console.log(calculateFlightTicket(1000, 4, false, true));  // Kỳ vọng: 0 (Trẻ em dưới 6 tuổi miễn phí)
// console.log(calculateFlightTicket(1000, 25, false, true)); // Kỳ vọng: 1250 (Người lớn, ngày lễ tăng 25%)
// console.log(calculateFlightTicket(12000, 7, true, true)); // 


//Hom nay off, mai lam tiep nha ong!
// 1. Khởi tạo mảng trống
// let fruitBasket = [];

// // 2. Thêm dữ liệu vào mảng bằng .push()
// fruitBasket.push({ name: "Apple", color: "Red", quantity: 5 });
// fruitBasket.push({ name: "Banana", color: "Yellow", quantity: 10 });
// fruitBasket.push({ name: "Mango", color: "Yellow", quantity: 3 });

// // 3. Hàm tính tổng số lượng trái cây
// function getTotalFruits(basket) {
//     let total = 0; // Biến tích lũy để cộng dồn

//     for (let i = 0; i < basket.length; i++) {
//         // basket[i] là từng đối tượng trái cây
//         // basket[i].quantity là con số ta cần lấy ra
//         total += basket[i].quantity; 
//     }

//     return total;
// }

// // 4. Hiển thị kết quả
// const result = getTotalFruits(fruitBasket);
// console.log("Tổng số trái cây trong giỏ là: " + result);

// // --- Phần thử thách thêm: Tìm trái cây màu vàng ---
// console.log("Các loại trái cây màu vàng là:");
// fruitBasket.forEach(fruit => {
//     if (fruit.color === "Yellow") {
//         console.log("- " + fruit.name);
//     }
// });
// // Chạy thử kiểm tra:
// console.log(calculateFlightTicket(1000, 10, true, false)); // Kỳ vọng: 475 (Giảm 50% còn 500, giảm tiếp 5% của 500)
// console.log(calculateFlightTicket(1000, 4, false, true));  // Kỳ vọng: 0 (Trẻ em dưới 6 tuổi miễn phí)
// console.log(calculateFlightTicket(1000, 25, false, true)); // Kỳ vọng: 1250 (Người lớn, ngày lễ tăng 25%)
// console.log(calculateFlightTicket(12000, 7, true, true)); // 

//----------------------------------------------------------------------------------------------
// // 1. Global Scope: Biến có thể được truy cập ở bất cứ đâu
// const globalVar = "Tôi là Global";

// function scopeExample() {
//     // 2. Function Scope: Biến chỉ tồn tại bên trong hàm này
//     const functionVar = "Tôi là Function Scope";

//     if (true) {
//         // 3. Block Scope: Biến chỉ tồn tại trong cặp ngoặc nhọn { } này
//         // Lưu ý: Chỉ áp dụng với let và const. 'var' sẽ bị "leak" ra ngoài block.
//         const blockVar = "Tôi là Block Scope";
        
//         console.log(globalVar);   // ✅ OK
//         console.log(functionVar); // ✅ OK
//         console.log(blockVar);    // ✅ OK
//     }

//     console.log("--- Bên ngoài Block ---");
//     console.log(globalVar);      // ✅ OK
//     console.log(functionVar);    // ✅ OK
    
//     try {
//         console.log(blockVar);   // ❌ Lỗi: blockVar is not defined
//     } catch (e) {
//         console.log("Không thể truy cập blockVar từ bên ngoài block!");
//     }
// }

// scopeExample();

// console.log("--- Bên ngoài Hàm ---");
// console.log(globalVar);          // ✅ OK
// try {
//     console.log(functionVar);    // ❌ Lỗi: functionVar is not defined
// } catch (e) {
//     console.log("Không thể truy cập functionVar từ bên ngoài hàm!");
// }

//----------------------------------------------------------------------------------------------
// Roman to interger
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // 1. Tạo bảng tra cứu giá trị
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        let currentVal = romanMap[s[i]];
        let nextVal = romanMap[s[i + 1]];

        // 2. Kiểm tra quy tắc trừ
        if (nextVal > currentVal) {
            // Nếu số sau lớn hơn số trước, ta trừ số hiện tại
            total -= currentVal;
        } else {
            // Ngược lại, ta cộng bình thường
            total += currentVal;
        }
    }

    return total;
};

// Kiểm tra thử
console.log(romanToInt("LVIII"));   // Kết quả: 58
console.log(romanToInt("MCMXCIV")); // Kết quả: 1994
