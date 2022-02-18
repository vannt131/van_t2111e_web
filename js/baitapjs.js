var ds = [];
var infor = {
    fullname: "",
    tel: "",
    email: "",
    address: "",
}
function typing(e){
    var notices = document.getElementsByClassName("notice");
    for (var i = 0; i<notices.length; i++){
        notices[i].style.display = "none";
    }
    var this_notice = e.nextElementSibling;
    this_notice.style.display = "block";
    this_notice.innerText = e.value;
    console.log(e.name);
    //e.parentElement -> div.form-group
    //e.previousElementSibling
}
function submit(){
    var fn = document.getElementById("fullname");
    var tl = document.getElementById("tel");
    var infor = {
        fullname: fn.value,
        tel:tl.value,
        email:document.getElementById("email").value,
        address: document.getElementById("address").value,
    }
   // var formcontrols = document.getElementsByClassName("form-control");
   // var infor = {};
   // for (var i =0; i<formcontrols.length; i++){
   //     switch (formcontrols[i].name){
   //         case "fullname": infor.fullname = formcontrols[i].value;
   //               break;
   //         case "tel": infor.tel = formcontrols[i].value;
   //               break;
   //         case "email": infor.email = formcontrols[i].value;
   //               break;
   //         case "address": infor.address = formcontrols[i].value;
   //               break;
   //     }
   // }
   ds.push(infor);
   renderHTML();
}
function renderHTML(){
    var html = "";
    for (var i = 0; i<ds.length; i++){
        html += "<li>\n" +
            "<h2>"+ds[i].fullname+"</h2>\n"+
            "<h3>"+ds[i].tel+"</h3>\n"+
            "<h3>"+ds[i].email+"</h3>\n"+
            "<p>"+ds[i].address+"</p>\n"+
            "</li>"
    }
    var list = document.getElementById("infor");
    list.innerHTML = html;
}