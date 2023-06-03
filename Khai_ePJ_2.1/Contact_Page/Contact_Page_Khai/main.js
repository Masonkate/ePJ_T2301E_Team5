document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn việc gửi form
  
    // Lấy giá trị từ các trường input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
  
    // Gửi dữ liệu đến server hoặc xử lý theo yêu cầu của bạn
    // Ở đây tôi chỉ in ra các giá trị đã lấy từ form
    console.log('Họ và tên:', name);
    console.log('Email:', email);
    console.log('Số điện thoại:', phone);
    console.log('Tin nhắn:', message);
  
    // Sau khi xử lý, bạn có thể thêm mã để thông báo thành công hoặc chuyển hướng trang
  });
  
  // Khởi tạo bản đồ Google Maps
  function initMap() {
    var mapOptions = {
      center: { lat: 11.9359, lng: 108.4422 },
      zoom: 15
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
    var marker = new google.maps.Marker({
      position: { lat: 11.9359, lng: 108.4422 },
      map: map,
      title: 'Trụ sở chính'
    });
  }
  