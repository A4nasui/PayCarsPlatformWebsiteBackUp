<?php
ob_start();
?>

<?php
include "../koneksi/koneksi.php";
$id = $_GET["id_pengguna"];

if (isset($_POST["submit"])) {
    $id_pengguna = $_POST['id_pengguna'];
    $nama_pengguna = $_POST['nama_pengguna'];
    $username_pengguna = $_POST['username_pengguna'];
    $email_pengguna = $_POST['email_pengguna'];
    $password_pengguna = $_POST['password_pengguna'];
    $nomor_telepon_pengguna = $_POST['nomor_telepon_pengguna'];
    $alamat_pengguna = $_POST['alamat_pengguna'];
    $tipe_akun = $_POST['tipe_akun'];
    $status_pengguna = $_POST['status_pengguna'];
    $profil_pengguna = $_POST['profil_pengguna'];

    $sql = "UPDATE `data_pengguna` SET `id_pengguna`='$id_pengguna',`nama_pengguna`='$nama_pengguna',`username_pengguna`='$username_pengguna',`email_pengguna`='$email_pengguna',`password_pengguna`='$password_pengguna',`nomor_telepon_pengguna`='$nomor_telepon_pengguna',`alamat_pengguna`='$alamat_pengguna',`tipe_akun`='$tipe_akun',`status_pengguna`='$status_pengguna',`profil_pengguna`='$profil_pengguna' WHERE id_pengguna = '$id'";

    $result = mysqli_query($koneksi, $sql);

    if ($result) {
        header("Location: data_pengguna.php?msg=Data updated successfully");
    } else {
        echo "Failed: " . mysqli_error($koneksi);
    }
}

$sql = "SELECT * FROM `data_pengguna` WHERE id_pengguna = '$id' LIMIT 1";
$result = mysqli_query($koneksi, $sql);
$row = mysqli_fetch_assoc($result);



?>