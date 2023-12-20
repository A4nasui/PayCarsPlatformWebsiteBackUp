<?php

$data = array(
     'nama' => 'Muhammad Ilham',
     'umur' => 20,
     'pekerjaan' => 'Programmer'
);

$json = json_encode($data);

$file = 'data-access.json';
file_put_contents($file, $json);

echo 'Data JSON telah disimpan dalam file ' . $file;

?>