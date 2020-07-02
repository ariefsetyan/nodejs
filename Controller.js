'use strict';
var respone = require('./res');
var koneksi = require('./koneksi')

exports.index = function(req,res){
    respone.ok("belajar aplikasi res",res)
}

exports.getData = function(req,res){
    koneksi.query("SELECT * FROM mahasiswa", function (err, result, fields) {
        if (err){
            koneksi.log(err);
        }else{
            respone.ok(result,res)
        }
      });
}

exports.postData = function(req,res){
    var nim = req.body.nim
    var nama = req.body.nama
    var jurusan = req.body.jurusan

    // console.log(nim, nama, jurusan);

    koneksi.query(`INSERT INTO mahasiswa VALUES (?,?,?)`,
    [nim,nama, jurusan], 
    function (err, result, fields) {
        if (err) throw err;
        respone.ok("1 record inserted",res);
      });
    
}

exports.updateData = function(req,res){
    var nim = req.body.nim
    var nama = req.body.nama
    var jurusan = req.body.jurusan

    // console.log(nim, nama, jurusan);

    koneksi.query(`UPDATE mahasiswa SET nim = ?, nama = ?, jurusan = ? WHERE nim = ?`,
    [nim,nama, jurusan, nim], 
    function (err, result, fields) {
        if (err) throw err;
        respone.ok("1 record updated",res);
      });
    
}

exports.deleteData = function(req,res){
    var nim = req.body.nim
    // var nama = req.body.nama
    // var jurusan = req.body.jurusan

    // console.log(nim, nama, jurusan);

    koneksi.query(`DELETE FROM mahasiswa WHERE nim = ?`,
    [nim], 
    function (err, result, fields) {
        if (err) throw err;
        respone.ok("1 record delete",res);
      });
    
}
