// Mảng chứa các thông tin sản phẩm theo từng chủ đề
const arrSpSinhNhat = [
    { ma: "sp1", ten: "Tình đầu thơ ngây", link: "hoa.html", hinh: "sn1.jpg", gia: "250.000 đ" },
    { ma: "sp2", ten: "Romance 3", link: "", hinh: "sn2.jpg", gia: "800.000 đ" },
    { ma: "sp3", ten: "Sweet Love", link: "", hinh: "sn3.jpg", gia: "350.000 đ" },
    { ma: "sp4", ten: "Charming Blossoms", link: "", hinh: "sn4.jpg", gia: "450.000 đ" },
    { ma: "sp5", ten: "Người thương", link: "", hinh: "sn5.jpg", gia: "350.000 đ" },
    { ma: "sp6", ten: "The greatest thing", link: "", hinh: "sn6.jpg", gia: "450.000 đ" },
    { ma: "sp7", ten: "All of love", link: "", hinh: "sn7.jpg", gia: "550.000 đ" },
    { ma: "sp8", ten: "Only rose premium 3", link: "", hinh: "sn8.jpg", gia: "750.000 đ" },
    { ma: "sp9", ten: "Sound of love", link: "", hinh: "sn9.jpg", gia: "350.000 đ" },
    { ma: "sp10", ten: "Gửi ngàn lời yêu", link: "", hinh: "sn10.jpg", gia: "550.000 đ" },
    { ma: "sp11", ten: "You are beautiful", link: "", hinh: "sn11.jpg", gia: "900.000 đ" },
    { ma: "sp12", ten: "Cuti bear and rose 2", link: "", hinh: "sn12.jpg", gia: "1.200.000 đ" },
    { ma: "sp13", ten: "Pink Box", link: "", hinh: "sn13.jpg", gia: "1.000.000 đ" },
    { ma: "sp14", ten: "Jolie", link: "", hinh: "sn14.jpg", gia: "1.500.000 đ" },
    { ma: "sp15", ten: "Áng mây hồng", link: "", hinh: "sn15.jpg", gia: "750.000 đ" },
    { ma: "sp16", ten: "Proud of you", link: "", hinh: "sn16.jpg", gia: "700.000 đ" },

];

const arrSpKhaiTruong = [
    { ten: "Paty", hinh: "hkt1.jpg", link: "", gia: "950.000 đ" },
    { ten: "Tươi sáng 3", hinh: "hkt2.png", link: "", gia: "800.000 đ" },
    { ten: "Kệ chúc mừng 07", hinh: "hkt3.jpg", link: "", gia: "1.000.000 đ" },
    { ten: "Luxury vase 22", hinh: "hkt4.jpg", link: "", gia: "1.700.000 đ" },
    { ten: "Luxury vase 11", hinh: "hkt5.jpg", link: "", gia: "1.600.000 đ" },
    { ten: "Perfection 03", hinh: "hkt6.jpg", link: "", gia: "1.350.000 đ" },
    { ten: "Great Achievement", hinh: "hkt7.jpg", link: "", gia: "1.200.000 đ" },
    { ten: "Congratulations 4", hinh: "htk8.png", link: "", gia: "2.500.000 đ" },
    { ten: "Bonjour", hinh: "hkt9.jpg", link: "", gia: "1.200.000 đ" },
    { ten: "Luxury vase 12", hinh: "hkt10.jpg", link: "", gia: "2.200.000 đ" },
    { ten: "Perfection 02", hinh: "hkt11.jpg", link: "", gia: "1.400.000 đ" },
    { ten: "Khoe sắc 2", hinh: "hkt12.jpg", link: "", gia: "1.300.000 đ" },
    { ten: "Luxury vase 6", hinh: "hkt13.jpg", link: "", gia: "3.500.000 đ" },
    { ten: "Hưng phát", hinh: "hkt14.jpg", link: "", gia: "2.500.000 đ" },
    { ten: "Đỉnh cao", hinh: "hkt15.jpg", link: "", gia: "3.000.000 đ" },
    { ten: "Khu vườn xuân", hinh: "hkt16.png", link: "", gia: "925.000 đ" },

];

const arrSpChucMung = [
    { ten: "Congrats", hinh: "hcm1.jpg", link: "", gia: "500.000 đ" },
    { ten: "Điệu valse mùa xuân", hinh: "hcm2.jpg", link: "", gia: "550.000 đ" },
    { ten: "Chuyện của nắng", hinh: "hcm3.jpg", link: "", gia: "750.000 đ" },
    { ten: "kệ chúc mừng 02", hinh: "hcm4.jpg", link: "", gia: "800.000 đ" },
    { ten: "Congrats mini size 2", hinh: "hcm5.png", link: "", gia: "900.000 đ" },
    { ten: "Great Achievement", hinh: "hcm6.jpg", link: "", gia: "1.200.000 đ" },
    { ten: "Luxury vase 23", hinh: "hcm7.jpg", link: "", gia: "1.800.000 đ" },
    { ten: "Perfection 02", hinh: "hcm8.jpg", link: "", gia: "1.400.000 đ" },
    { ten: "Congrats mini size 1", hinh: "hcm9.jpg", link: "", gia: "950.000 đ" },
    { ten: "Glass vase 4", hinh: "hcm10.jpg", link: "", gia: "1.100.000 đ" },
    { ten: " Hoa hạnh phúc", hinh: "hcm11.jpg", link: "", gia: "1.700.000 đ" },
    { ten: "Ngày tươi sáng", hinh: "hcm12.jpg", link: "", gia: "1.000.000 đ" },
    { ten: "Luxury vase 22", hinh: "hcm13.jpg", link: "", gia: "1.700.000 đ" },
    { ten: "Perfection 01", hinh: "hcm14.jpg", link: "", gia: "1.700.000 đ" },
    { ten: "Premium vase 1", hinh: "hcm15.jpg", link: "", gia: "2.800.000 đ" },
    { ten: "Premium vase 4", hinh: "hcm16.jpg", link: "", gia: "6.000.000 đ" },
];

const arrSpChiaBuon = [
    { ten: "Thành kính phân ưu 3", hinh: "hcb1.jpg", link: "", gia: "2.650.000 đ" },
    { ten: "Lời tạm biệt", hinh: "hcb2.jpg", link: "", gia: "650.000 đ" },
    { ten: "Thành kính phân ưu 1", hinh: "hcb3.jpg", link: "", gia: "750.000 đ" },
    { ten: "Kệ chia buồn 04", hinh: "hcb4.jpg", link: "", gia: "850.000 đ" },
    { ten: "Kệ chia buồn 02", hinh: "hcb5.jpg", link: "", gia: "650.000 đ" },
    { ten: "Deep condolences", hinh: "hcb6.jpg", link: "", gia: "850.000 đ" },
    { ten: "Tâm nguyện", hinh: "hcb7.png", link: "", gia: "1.000.000 đ" },
    { ten: "Dòng kí ức", hinh: "hcb8.jpg", link: "", gia: "800.000 đ" },
    { ten: "Ly Biệt", hinh: "hcb9.jpg", link: "", gia: "1.500.000 đ" },
    { ten: "Nguyện cầu", hinh: "hcb10.jpg", link: "", gia: "1.500.000 đ" },
    { ten: "Ước nguyện", hinh: "hcb11.jpg", link: "", gia: "1.500.000 đ" },
    { ten: "Kệ chia buồn 01", hinh: "hcb12.jpg", link: "", gia: "600.000 đ" },
    { ten: "Thênh thang", hinh: "hcb13.jpg", link: "", gia: "1.200.000 đ" },
    { ten: "Rest in peace", hinh: "hcb14.png", link: "", gia: "1.350.000 đ" },
    { ten: "Condolence 2", hinh: "hcb15.jpg", link: "", gia: "1.500.000 đ" },
    { ten: "Condolence 4", hinh: "hcb16.jpg", link: "", gia: "1.400.000" },

];

//  Khai báo các biến để lưu trữ các phần tử HTML của các danh mục sản phẩm
const sinhNhatProducts = document.querySelector("#sinh-nhat-products");
const khaiTruongProducts = document.querySelector("#khai-truong-products");
const chucMungProducts = document.querySelector("#chuc-mung-products");
const chiaBuonProducts = document.querySelector("#chia-buon-products");
// Khai báo hàm renderProducts để hiển thị các sản phẩm trong một danh mục:
function renderProducts(products, container, showAll) {
    container.innerHTML = "";
    const numProducts = showAll ? products.length : 8;
    for (let i = 0; i < numProducts; i++) {
        const product = products[i];
        const productElement = document.createElement("div");
        productElement.innerHTML = `
            <div class='item'>
                <div class='i'>
                    <a href="${product.link}" ><img src="hình-hoa-sn/${product.hinh}" alt=""></img></a>  
                </div>
                <div class='t'>
                    <a href="hoa_khai_truong.htm">${product.ten}</a>
                    <span class='vn'>${product.gia}</span>
                </div>
            </div>`;
        container.appendChild(productElement);
    }
};
// Khai báo hàm handleViewMoreClick để xử lý sự kiện khi nhấp vào nút "Xem thêm" hoặc "Thu gọn" của mỗi danh mục sản phẩm:
function handleViewMoreClick(event) {
    const category = event.target.getAttribute("data-category");
    const container = document.getElementById(category + "-products");
    const button = event.target;

    if (container.classList.contains("expanded")) {
        container.classList.remove("expanded");
        button.textContent = "Xem thêm";
        renderProducts(getProductArray(category), container, false);
    } else {
        container.classList.add("expanded");
        button.textContent = "Thu gọn";
        renderProducts(getProductArray(category), container, true);
    }
}
// Khai báo hàm getProductArray để trả về mảng sản phẩm dựa trên danh mục:
function getProductArray(category) {
    switch (category) {
        case "sinh-nhat":
            return arrSpSinhNhat;
        case "khai-truong":
            return arrSpKhaiTruong;
        case "chuc-mung":
            return arrSpChucMung;
        case "chia-buon":
            return arrSpChiaBuon;
        default:
            return [];
    }
};
// bắt sựu kiện khi click vào xem thêm sẽ hiện thị ra thêm sản phậm
const viewMoreButtons = document.querySelectorAll(".view-more");
viewMoreButtons.forEach((button) => {
    button.addEventListener("click", handleViewMoreClick);
});

// Hiện thị các sản phẩm ban đầu
renderProducts(arrSpSinhNhat, sinhNhatProducts, false);
renderProducts(arrSpKhaiTruong, khaiTruongProducts, false);
renderProducts(arrSpChucMung, chucMungProducts, false);
renderProducts(arrSpChiaBuon, chiaBuonProducts, false);