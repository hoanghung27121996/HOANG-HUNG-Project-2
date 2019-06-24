
//Khai báo mảng img và cố định bằng giá trị đầu tiên [0] của mảng:
var img = document.getElementsByClassName("img");
img[0].style.display = "block";
var index = 0;
//setInterval là đặt thời gian thực hiện function :
setInterval(nextImg, 3000);
function nextImg() {
    // Khai báo mảng img
    var img = document.getElementsByClassName("img");
    //Tạo biến tmp để lưu lại giá trị trước đó (=index):
    var tmp = index;
    index++;
    if (index == img.length) { //khi index=3 thi index=0
        index = 0;
    }
    img[index].style.display = "block";
    img[tmp].style.display = "none";
}
function prevImg() {
    var img = document.getElementsByClassName("img");
    var tmp = index;
    index --;
    if (index < 0){
        index = 2;
    }
    img[index].style.display = "block";
    img[tmp].style.display = "none";
}