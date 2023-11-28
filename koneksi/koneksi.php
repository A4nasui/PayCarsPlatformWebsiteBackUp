<?php
$koneksi = mysqli_connect("localhost", "root", "", "paycars");

if (!$koneksi) {
    die("Koneksi database gagal: " . mysqli_connect_error());
}

function query($query)
{
    global $koneksi;
    $result = mysqli_query($koneksi, $query);
    $tempat = [];

    while ($row = mysqli_fetch_assoc($result)) {
        $tempat[] = $row;
    }
    return $tempat;
}
?>
