class UI {

    constructor(){
        $(".buttons").children().css("margin-top","5px");
        
        $(".post-form").css("display","none");  
        $(".put-form").css("display","none");       
        $(".delete-form").css("display","none");

        $(".put-user").css("display","none");
        
    }

    displayGet(users) {
        var html =``;

        html +=    `
        <div class='container'>
        <h1 class = 'text-center  display-5'>GET Method</h1>
        <div class = "row">
        `;
        users.forEach(function (user,index) {
            html +=
                `
            <div class = 'col-md-4'>
            <div class="card border-primary mt-1">
            <div class="card-header text-center">
                ID : ${user.id}
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">first Name : ${user.fname}</li> 
            <li class="list-group-item">first Name : ${user.lname}</li>                        
              <li class="list-group-item">Gender : ${user.gender}</li>
              <li class="list-group-item">Age : ${user.age}</li>
              <li class="list-group-item">Email : ${user.email}</li>
            <li class="list-group-item">Company ID : ${user.companyId}</li>                        
            </ul>
          </div>
          </div>
            `

        });
        
        html+=
        `
        </div>
        </div>
        `
        $(".operations").html(html);
    }

    hide(get,post,put,del){
        $(".operations").html(get);
        $(".post-form").css("display",post);          
        $(".put-form").css("display",put);
        $(".delete-form").css("display",del);
    }


    updatePutForm(user){
        $("#ID").val(user.id);        
        $("#fname").val(user.firstName);
        $("#lname").val(user.lastName);
        $("#gender").val(user.gender);
        $("#age").val(user.age);
        $("#email").val(user.email);
        $("#companyID").val(user.companyID);
    }

    clearFields() {
        $("#ID").val('');        
        $("#fname").val('');
        $("#lname").val('');
        $("#gender").val('');
        $("#age").val('');
        $("#email").val('');
        $("#companyID").val('');

        $("#get-person").val('');
        $("#delete-person").val('');
    }

    showAlert(text, className) {
        const alert = document.createElement('div');
        //adding type of alert
        alert.className = `alert ${className}`;
        //adding text
        alert.appendChild(document.createTextNode(text));

        const container = document.querySelector('.main');
        const form = document.querySelector('.operations');
        $(alert).addClass("m-2");
        container.insertBefore(alert, form);
        setTimeout(this.removeAlert, 3000);
    }

    removeAlert() {
        document.querySelector('.alert').remove();
        //console.log(alert);
    }
}