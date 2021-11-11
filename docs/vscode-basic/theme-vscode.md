---
sidebar_position: 1
---

# Cài đặt giao diện VSCode

Nếu bạn là một người thích màu mè không thích font chữ hoặc giao diện nhàm chán của **Visual studio Code** thì ở bài này mình sẽ hướng dẫn các bạn cài đặt chỉnh sửa lại giao diện **Visual Studio Code** và font chữ mặc định.

## 1. Cài đặt Font chữ Fira Code

-  Để cài đặt fonts chữ các bạn truy cập vào website: https://github.com/tonsky/FiraCode.
-  Sau đó nhấn vô Download & Install như hình: <br/>

   ![downloadfiracode](/img/vscode/download_fira_code.png)

-  Tải về trong thư mục download mình tiến hành giải nén file **Fira_Code_v5.x.zip**.

-  Sau khi giải nén xong ta sẽ nhìn thấy folder có tên **ttf** click vô mình sẽ chuột phải nhấn **Install** hết 5 fonts chữ trong đó:

   ![firacode](/img/vscode/fonts_fira.png)

-  Sau khi cài xong 5 fonts chữ, mình vô **VSCode** để cài đặt, truy cập vào file setting của vscode nhấn tổ hơp phím **Ctrl + Shift + P** gõ **Setting.json** sau đó nhấn vào **Preferences: Open Settings (JSON)**

   ![setting](/img/vscode/Settings.png)

-  Các bạn copy và dán 2 dòng này vào trong file json sau đó save lại và trải nghiệm fonts chữ Fira Code:

```json
"editor.fontFamily": "'Fira Code',Consolas, 'Courier New', monospace",
"editor.fontLigatures": true,
```

## 2. Cài đặt giao diện cho Visaul Studio Code

-  Phần này mình lười nên tạm thời chúng ta sẽ làm theo video trên youtube, các bạn vào kênh evondev của anh Tuấn và làm theo ảnh sẽ có được giao diện vừa đẹp vừa xịn, sau này rãnh mình sẽ update sau.
-  https://www.youtube.com/watch?v=Lv-5vYaNH6U&t=3s
