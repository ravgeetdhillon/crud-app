<?php

require_once "config.php";

$query = "SELECT * FROM tbl_students";
if ($result = mysqli_query($link, $query)){
    if (mysqli_num_rows($result) > 0){
        echo <<<EOT
<div class="table">
            <div class="headers">
                <h5 class="head">Name</h5>
                <h5 class="head">DoB</h5>
                <h5 class="head">Sports</h5>
                <h5 class="head">Role</h5>
                <h5 class="head actions">Actions</h5>
            </div>
            <div class="records">
EOT;
            while($row = mysqli_fetch_array($result)){
                echo <<<EOT
                <div class="record">
                    <p class="entry">{$row['stu_name']}</p>
                    <p class="entry">{$row['stu_dob']}</p>
                    <p class="entry">{$row['stu_sport']}</p>
                    <p class="entry">{$row['stu_role']}</p>
                    <div class="actions">
                        <p><a href="edit.html?id={$row['stu_id']}"><i class="fas fa-pencil-alt edit"></i></a></p>
                        <p><a onclick="delAlert({$row['stu_id']})"><i class="fas fa-trash del"></i></a></p>
                    </div>
                </div>
EOT;
            }

        echo <<<EOT

            </div>
        </div>
EOT;
    }
    else{
        echo "empty";
    }
    mysqli_free_result($result);
}
else{
    echo "failed";
}

mysqli_close($link);

?>