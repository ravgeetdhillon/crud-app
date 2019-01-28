<?php

require_once "config.php";

if (isset($_REQUEST["sname"]) && isset($_REQUEST["dob"]) && isset($_REQUEST["sport"]) && isset($_REQUEST["role"])){

    $sname = trim($_REQUEST["sname"]);
    $dob = trim($_REQUEST["dob"]);
    $sport = trim($_REQUEST["sport"]);
    $role = trim($_REQUEST["role"]);

    $query = "INSERT INTO tbl_students (stu_name, stu_dob, stu_sport, stu_role) VALUES (?, ?, ?, ?)";

    if ($stmt = mysqli_prepare($link, $query)) {
        mysqli_stmt_bind_param($stmt, "siss", $p_sname, $p_dob, $p_sport, $p_role);
        $p_sname = $sname;
        $p_dob = $dob;
        $p_sport = $sport;
        $p_role = $role;
        
        if (mysqli_stmt_execute($stmt)){
            echo "added";
        }
        else{
            echo "notadded";
        }
        mysqli_stmt_close($stmt);
    }
    else{
        echo "failed";
    }
}
mysqli_close($link);

?>