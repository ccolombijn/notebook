<?php
function trim_r($r = ""){
    return $r ? trim(preg_replace("/\s\s+/", " ", $r)) : "";
}
ini_set("display_errors", 1);
ini_set("display_startup_errors", 1);
error_reporting(E_ALL);
session_start();
header('Content-Type: application/json; charset=utf-8');
if(isset($_SESSION["dir"])) chdir($_SESSION["dir"]);
if( isset($_POST["filename"]) && isset($_POST["contents"])) {
    $contents = $_POST["contents"];
    $filename = $_POST["filename"];
    file_put_contents($filename,$contents);
    $response = "Wrote";
} elseif(isset($_GET["filename"])) {
    $filename = $_GET["filename"];
    if(file_exists($filename))
        $contents = file_get_contents($filename);
    else
        $contents = '';
    $response = "Read";
}
$lines = preg_split("/\r\n|\n|\r/", $contents);
$response = $response ." ".count($lines)." lines";
echo json_encode(array(
    "dir" => trim_r(getcwd()),
    "response" => $response,
    "contents" => $contents,
    "filename" => $filename
));
