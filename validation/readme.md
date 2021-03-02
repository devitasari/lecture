**SEQUALIZE VALIDATION**

- Validasi ada yang terdapat di client (html required) dan server
- Di sequelize, VALIDASI berada di level aplikasi. Dia akan mengecek, SEBELUM query dikirim ke db 
- Sequelize juga punya fitur CONSTRAINT yang berada di level db. Dia akan mengecek SETELAH query dikirim ke db


**HOW TO USE**
- CONSTRAINT ditambahkan ketika mendefine sebuah model (allowNull, unique, dsb)
- VALIDASI ditambahkan di model berupa property `validate`
- jenis-jenis VALIDASI:
1. Sequelize validation: built-in validation yang sudah disediakan oleh sequelize. Source: https://sequelize.org/master/manual/validations-and-constraints.html
2. Custom validation: logic validasi ditentukan oleh user

**DEMO**
Buatlah model User dengan attribute
1. name : panjang harus antara 4 - 20 karakter 
2. username : harus unique
3. password : tidak boleh mengandung simbol / hanya terdiri dari angka atau huruf
4. email : harus format email 
5. birthdate : jika umur <17 tidak boleh registrasi

**HELPER FUNCTION**
- Function yang menjadi bagian dari program lain supaya program terkesan lebih simple, mudah dibaca, dan dapat digunakan berulang.

**Demo**
Buatlah function `errorHandler` untuk mengolah pesan error!



