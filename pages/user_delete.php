<?php

$id = $_GET["id_pengguna"];
$sql = "DELETE FROM data_pengguna WHERE `data_pengguna`.`id_pengguna` = '$id'";
$result = mysqli_query($koneksi, $sql);

if ($result) {
header("Location: user.php?msg=Data deleted successfully");
} else {
echo "Failed: " . mysqli_error($koneksi);
}

?>