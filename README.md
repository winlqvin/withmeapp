# withmeapp

Đây là app client được xây dựng để người dùng tương tác với hệ thống


Hệ thống cấu trúc thư mục dành cho nhà phát triển:

- .openshift                            (chứa các thành phần của host openshift)
- app                                   (chứa các thành phần chính của app)
  - components                          (chứa các thành phần của chương trình, đã được module hóa)
    - home                              (chứa các thành phần cấu thành nên trang home, bao gồm các controllers, views, directives...)
      - homectrl.js                     (Home Controller)
      - homeview.html                   (Home View)
      - ...                             (Các thành phần khác, chú ý là nếu thành phần này có nhiều mục nhỏ, có thể tạo thư mục để chia nhỏ)
    - chat                              (chứa các thành phần của hệ thống chat, bao gồm các thư mục con và các tập tin liên quan)
    ...
  - shared                              (chứa các thành phần dùng chung trong toàn bộ hệ thống, như các service, directives, view chung...)
    - services                          (chứa các service dùng chung)
    ...
  - app.module.js                       (tập tin khai báo các module cho chương trình)
  - app.route.js                        (tập tin khai báo các route theo ui-route)
- assets                                (thư mục chứa các tài nguyên khác, dùng trong việc hiển thị)
  - css                                 (chứa các stylesheet tự tạo thêm)
  - js                                  (chứa các mã javascript mà người dùng tự tạo thêm)
  - fonts                               (chứa các fonts cần dùng)
  - libs                                (chứa các thư viện như jquery, bootstrap, angular...)
