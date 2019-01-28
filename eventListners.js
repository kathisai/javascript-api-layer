const logic = new Code;

$(".get").click(function (e) {
    ui.hide('', 'none', 'none', 'none');
    logic.callGet();
    e.preventDefault();
});

$(".post").click(function (e) {

    $(".add-person").css("display","block");
    $(".put-user").css("display","none");

    ui.hide('', 'block', 'none', 'none');
    e.preventDefault();
});

$(".put").click(function (e) {
    $(".add-person").css("display","none");
    $(".put-user").css("display","block");

    ui.hide('', 'none', 'block', 'none');
    e.preventDefault();
});

$(".delete").click(function (e) {
    //logic.callDelete();
    ui.hide('', 'none', 'none', 'block');
    e.preventDefault();
});

$(".add-person").click(function (e) {
    //console.log("perwson clicked");
    logic.postUser('0');
    ui.clearFields();
    e.preventDefault();
});


$(".delete-person").click(function (e) {
    //console.log("perwson clicked");
    logic.deleteUser();
    //ui.clearFields();
    e.preventDefault();
});


$(".get-person").click(function (e) {
    //console.log("perwson clicked");
    logic.getUser();
    //ui.clearFields();
    e.preventDefault();
});

$(".put-user").click(function (e) {
    //console.log("perwson clicked");
    logic.postUser('1');
    ui.clearFields();
    e.preventDefault();
});