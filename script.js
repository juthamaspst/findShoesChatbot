console.log("Test save script");
window.localStorage.setItem("shopName","beeshop")
var shopname = window.localStorage.getItem("shopName")
var data = {
    shopname : "",
    brand : "",
    color : "",
    file : "",
    method : "POST"
}

function fileName(){
    var fileDiv = document.getElementById("file").files
    var fileNameDiv = document.getElementById("fileName")
    var childDiv = document.createElement("p")
    childDiv.textContent = `${fileDiv[0].name} - ${Math.floor(fileDiv[0].size/1024)} KB`
    fileNameDiv.append(childDiv)
    imgList()
}


function imgList(){
    console.log("TEST IMG LIST")
    var imgSrcList = [
        {
            name : "adidas_superstar.png",
            src : "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/7ed0855435194229a525aad6009a0497_9366/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2-superstar.jpg"
        },
        {
            name : "adidas_NMD.png",
            src : "https://assets.adidas.com/images/w_600,f_auto,q_auto/bfff95f0750341bf939daed70141260e_9366/NMD_V3_GX9468_01_standard.jpg"
        },
        {
            name : "Forum_Mid_Shoes_White.png",
            src : "https://assets.adidas.com/images/w_600,f_auto,q_auto/c7227d99699243099c24ac5e00406c2c_9366/Forum_Mid_Shoes_White_FY4976_01_standard.jpg"
        },
        {
            name : "Nike_pegasus.png",
            src : "https://static.nike.com/a/images/t_default/57dd56da-b069-4c63-bece-4810c1067215/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B9%82%E0%B8%A3%E0%B9%89%E0%B8%94%E0%B8%A3%E0%B8%B1%E0%B8%99%E0%B8%99%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89-pegasus-39-kmZSD6.png"
        },
        {
            name : "Nike-limited.png",
            src : "https://media.gq-magazine.co.uk/photos/621cba005fd591a44bb4c960/master/w_1920,h_1280,c_limit/24022022_A_07.jpeg"
        },
        {
            name : "nike1.png",
            src : "https://images.dsw.com/is/image/DSWShoes/505633_601_ss_01.jpg?impolicy=qlt-medium&imwidth=800&imdensity=1"
        },
    ]

    var fileNameList = document.getElementById("fileNameList")
    var fileNameBlock 
    imgSrcList.map(img => {
        fileNameBlock = document.createElement("div")
        fileNameBlock.className = "file-name-block"

        var imgDiv = document.createElement("img")
        imgDiv.src = img.src
        imgDiv.style.width = "150px"
        imgDiv.style.height = "150px"
        fileNameBlock.append(imgDiv)
        
        var imgName = document.createElement("p")
        imgName.textContent = img.name
        fileNameBlock.append(imgName)
        
        fileNameList.append(fileNameBlock)
    })
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


/*ngrok http File:///C:/xampp/htdocs/Adminupdate
action="upload.php" method="post" enctype="multipart/form-data" */
