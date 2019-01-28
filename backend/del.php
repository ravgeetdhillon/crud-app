<?php

require_once "config.php";

if (isset($_REQUEST["id"])){
    $id = trim($_REQUEST["id"]);
    $query = "DELETE FROM tbl_students WHERE stu_id = ?";
    if ($stmt = mysqli_prepare($link, $query)){
        mysqli_stmt_bind_param($stmt, "i", $p_id);
        $p_id = $id;
        if (mysqli_stmt_execute($stmt)){
            echo "deleted";
        }
        else{
            echo "notdeleted";
        }
        mysqli_stmt_close($stmt);
    }
    else{
        echo "failed";
    }
}
mysqli_close($link);

?>