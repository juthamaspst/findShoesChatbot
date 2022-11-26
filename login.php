<?php      
    include('db_conn.php');  
    $Shopname = $_POST['Shopname'];  
    $password = $_POST['password'];  
      printf($Shopname);
      printf($password);
        //to prevent from mysqli injection  
        $Shopname = stripcslashes($Shopname);  
        $password = stripcslashes($password);  
        $Shopname = mysqli_real_escape_string($conn, $Shopname);  
        $password = mysqli_real_escape_string($conn, $password);  
      
        $sql = "SELECT *from tests where Shopname = '$Shopname' and password = '$password'";  
        $result = mysqli_query($conn, $sql);  
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);  
        $count = mysqli_num_rows($result);  
          
        if($count == 1){  
            header("Location: index.html?error=Incorect User name or password");
            exit();
        }  
        else{  
            header("Location: login.html?error=Incorect User name or password");
            exit();
        }     
?>  