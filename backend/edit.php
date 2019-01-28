<?php

require_once "config.php";

if (isset($_REQUEST["id"]) && isset($_REQUEST["sname"]) && isset($_REQUEST["dob"]) && isset($_REQUEST["sport"]) && isset($_REQUEST["role"])){

    $id = trim($_REQUEST["id"]);
    $sname = trim($_REQUEST["sname"]);
    $dob = trim($_REQUEST["dob"]);
    $sport = trim($_REQUEST["sport"]);
    $role = trim($_REQUEST["role"]);

    $query = "UPDATE tbl_students SET stu_name = ?, stu_dob = ?, stu_sport = ?, stu_role = ? WHERE stu_id = ?";

    if ($stmt = mysqli_prepare($link, $query)) {
        mysqli_stmt_bind_param($stmt, "sissi", $p_sname, $p_dob, $p_sport, $p_role, $p_id);
        $p_sname = $sname;
        $p_dob = $dob;
        $p_sport = $sport;
        $p_role = $role;
        $p_id = $id;
        
        if (mysqli_stmt_execute($stmt)){
            echo "updated";
        }
        else{
            echo "notupdated";
        }
        mysqli_stmt_close($stmt);
    }
    else{
        echo "failed";
    }
}
mysqli_close($link);

?>