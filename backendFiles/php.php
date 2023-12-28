//for defind the connection
if(isset($_POST['name'])){
     //your connection code
$server = "localhost";
$username = "root";
$password = "";
$dbname = "bbc";


//Create Connection

$conn = mysqli_connect($server, $username, $password ,$dbname);
mysqli_select_db($conn, $dbname);
//check connection
if (!$conn) {
     die("Connection With thid Database failed due to" . 
     mysqli_connect_error());
}
//echo "Connection Success to the Database";

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$booking_type = $_POST['booking_type'];
$date = $_POST['date'];

$sql = "INSERT INTO `bbcdata` (`name`, `email`, `phone`, `booking_type`, `date`) VALUES ('$name', '$email', '$phone', '$booking_type', '$date';";

//echo $sql;
$result = $conn->query($sql);
if (!$result){
     die("ERROR:" . $conn->error);
    // echo "Successfully Inserted";
   // $insert = true;
}//else{
   //  echo "ERROR: $sql <br>$conn->error";
//}
$con->close();
}