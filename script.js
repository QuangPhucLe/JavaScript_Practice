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
console.log("Hello World!");

console.log("Bai 1");
function bmi(kg,m)  {
    return kg / (m*2);
}
console.log("BMI cua ban la " + bmi(75,1.75));

console.log("Bai 2");
function letter(nameUser, nameEvent, time, location)    {
    return `Kinh moi ${nameUser} tham du ${nameEvent} vao luc ${time} dia diem tai ${location}`;
}
console.log(letter("Quang Phuc", "le tot nghiep", "9:00 AM", "Dai Hoc Van Lang"));

console.log("Bai 3");

function kiemTraSoDu(so_Du, tien_Rut)   {
    if (so_Du < tien_Rut) {
        console.log("So du khong du de thuc hien giao dich");
    }
    else {
        console.log("Rut tien thanh cong");
    }
}
console.log(kiemTraSoDu( 500, 501));


console.log("Bai 4")
function loaiRac(loai)  {
    switch(loai)    {
        case "chai nhua":
        case "lon nhom":
            console.log("Rac tai che");
            break;
        case "thuc an thua":
        case "la cay":
            console.log("Rac huu co");
            break;
        default:
            console.log("Rac con lai");
            break;
    }
}
console.log(loaiRac("lon nhom"));

console.log("Bai 5");
function kiemTraHocLuc(diemThi) {
    if (diemThi >= 8){
        return "Gioi";
    }
    else if (diemThi >= 6.5) {
        return "Kha";
    }
    else if (diemThi >= 5)  {
        return "Tung binh"
    }
    else {
        return "Yeu"
    }
}
console.log(kiemTraHocLuc(8));
console.log(kiemTraHocLuc(6.5));
console.log(kiemTraHocLuc(5));
console.log(kiemTraHocLuc(2));

console.log("Da lam xong bai tap co ban 4/8/2026");




console.log("Bai 6")
console.log("Bai 7")
console.log("Bai 8")
