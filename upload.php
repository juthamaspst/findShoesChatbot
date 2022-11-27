<?php
  // echo 'ABCD';  
 
  // $serverName="localhost:3307";
  // $userName="root@";
  // $userPassword="";
  // $dbName="updatedata";
  // $connect=mysqli_connect($serverName,$userName,$userPassword,$dbName);
  //now check the connection
  // if(!$connect)
  // {
  //   die("Connection Failed:" . mysqli_connect_error());

  // }
  // mysqli_set_charset($connect,"utf8");
  // if(isset($_POST['submit'])){
  isset($_POST['shopname']) ? $shopname = $_POST['shopname'] : $shopname = "";
  isset($_POST['brand']) ? $brand = $_POST['brand'] : $brand = "";
  isset($_POST['type']) ? $type = $_POST['type'] : $type = "";
  isset($_POST['file']) ? $file = $_POST['file'] : $file = "";
    // $Brand = $_POST['brand'];
    // $Color = $_POST['color'];
    // $img=$_FILES['file']['name'];
    // print $brand;
  print $shopname;
  print $brand;
  $status = "success1111";
  exit;
    // $query = "INSERT INTO admin(shopname,brand,color,Imagename) VALUE ('$Shopname','$Brand','$Color','$img')";
    // if (mysqli_query($connect, $query)){
        // echo '<h1 align="center">***Findshopbot ได้เพิ่มข้อมูลของคุณเรียบร้อยแล้ว***</font></h1>';
        // echo '<h1 align="center">***กดที่เครื่องหมาย X มุมขวาบนเพื่อปิดหน้าต่างนี้***</font></h1>';
	  // } 
	  // else{
		//     echo "Error: " . $query . "" . mysqli_error($connect);
	  // }
	  // mysqli_close($connect);
    // return $status;
  // }
  if(isset($_FILES['file'])){
    $file_name =$_FILES['file']['name'];
    $file_tmp =$_FILES['file']['tmp_name'];
    $upload_fol="picture/";
    $movefile = move_uploaded_file($file_tmp,$upload_fol .$file_name);
  }

  if(isset($_POST['insert'])){
    $query = "SELECT * FROM admin ORDER BY id DESC";  
                $result = mysqli_query($connect, $query);  
                while($row = mysqli_fetch_array($result))  
                {  
                     echo '  
                          <tr>  
                               <td>  
                                    <img src="data:image/jpeg;base64,'.base64_encode($row['name'] ).'" height="200" width="200" class="img-thumnail" />  
                               </td>  
                          </tr>  
                     ';  
                }  
  }
if(isset($_POST['delete'])){
  $id=$_POST['id'];
  $query1 = "delete from project where id = '$id' ";  
  $result = mysqli_query($connect,$query1);
  if($result){
    echo "Data Deleted. .";
  }
  
  else{
    echo "Data not Deleted. .";

  }
  mysqli_close($connect);
}
  


?>