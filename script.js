console.log("Test save script");
window.localStorage.setItem("shopName","beeshop")
var shopname = window.localStorage.getItem("shopName")
var data = {
    shopname : "AAAAAAAAAAAAA",
    brand : "",
    color : "",
    file : "",
    method : "POST"
}

function fileName(){
    var fileDiv = document.getElementById("file").files
    var fileNameDiv = document.getElementById("fileName")
    var name = `
                ${fileDiv[0].name} - ${Math.floor(fileDiv[0].size/1024)} KB
                `
    fileNameDiv.append(name)
}

function submitData(){
    console.log("submit")
    // data.shopname = shopname
    var brand = document.getElementById("brand").value
    var type = document.getElementById("type").value
    var file = document.getElementById("file").files
    console.log(file)
    console.log(data)
    // ajaxCall(data);
    $.ajax({
        type: "POST",
        url: 'upload.php',
        contentType: 'application/x-www-form-urlencoded',
        // enctype: "multipart/form-data",
        // processData: false,
        // contentType: false ,
        // timeout: 30000,
        xhrFields: {
            withCredentials: true
        },
        data: {
            shopname : shopname,
            brand : brand,
            color : type,
            file : file
        },
        // data: formData,
        success: function (data) { 
            // console.log(data)
            console.log("successINJS")
            console.log(data)
            // console.log(data.data.result)
        },
        error: function (error) {
            console.log(error)
        }
    });

}

function ajaxCall(data) {
    // $.ajax({
    //     // Our sample url to make request 
    //     url: './upload.php',

    //     // Type of Request
    //     method: "POST",

    //     // Function to call when to
    //     // request is ok 
    //     data: JSON.stringify(data),
    //     success: function (data) {
    //         console.log("Success");
    //     },

    //     // Error handling 
    //     error: function (error) {
    //         console.log(`Error ${error}`);
    //     }
    // });

    // $.ajax({
    //     type: "POST",
    //     url: 'upload.php',
    //     contentType: 'application/json',
    //     // enctype: "multipart/form-data",
    //     processData: false,
    //     contentType: false ,
    //     timeout: 30000,
    //     xhrFields: {
    //         withCredentials: true
    //     },
    //     data: data,
    //     // data: formData,
    //     success: function (data) { 
    //         // console.log(data)
    //         console.log("successINJS")
    //         console.log(data)
    //         // console.log(data.data.result)
    //     },
    //     error: function (error) {
    //         console.log(error)
    //     }
    // });

    // $.post("upload.php",{data},
    // function(data, status){
    //   alert("Data:");
    // });
}
/*ngrok http File:///C:/xampp/htdocs/Adminupdate
action="upload.php" method="post" enctype="multipart/form-data" */
