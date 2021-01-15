**SQL**
<br>
<br>
<img src="https://miro.medium.com/max/512/1*4e5PgSBgxgFolqvob9x_Wg.png" height=200>
<img src="https://assets.stickpng.com/images/585e469fcb11b227491c3374.png" width=200>
<img src="https://www.computerhope.com/jargon/d/database.jpg" height=200>
<br>
- tempat menyimpan data
<br>
<br>
<img src="https://media.bitdegree.org/storage/media/images/2018/12/node-js-interview-questions-logo-2-266x300.png" height=200>
<img src="https://assets.stickpng.com/images/585e469fcb11b227491c3374.png" width=200>
<img src="https://www.complexsql.com/wp-content/uploads/2017/01/sql-logo.jpg" width=200>
<br>
- bahasa untuk mengakses dan memanipulasi data
<br>
- Untuk membangun suatu database aplikasi, kita membutuhkan `Relational Database Management System (RDBMS)` untuk `mengotak-atik` database dengan bahasa SQL.
<br>
- Contoh RDBMS: MS Access, SQL Server, MySQL, `PostgresQL`
<br>
- Di database, data akan disimpan dalam sebuah `table`
<br>
- Di SQL, `language` nya dibagi menjadi 2 jenis, yaitu:
<br>
    1. `DDL (Data Definition Language)` => mendefinisikan tempat data (database dan table)
<br>
    2. `DML (Data Manipulation Language)` => mengakses dan memanipulasi data

**DDL**
- create db
- delete db
- create table
- delete table
- modifikasi table
    - tambah kolom
    - delete kolom
    - rename kolom
    - ubah kolom (tipe data)

**DML**
- insert one
- insert many
- update
- delete
- query
    - select (and, or, order by, limit)
    - join (inner join, full join)
    - agregate: calculation on a set of values and return a single value (min, max, sum, avg, count)

**Node Postgres**
- Untuk menghubungkan project node js dengan db postgres
- Langkah-langkah:
    1. npm init
    2. npm i pg
    3. .gitignore
    4. buat folder/file connection
    4. https://node-postgres.com/features/connecting => ambil bagian programatic, client
    5. sesuaikan settingan, cek!
    6. buat folder/file setup
    7. buat folder/file seeding



