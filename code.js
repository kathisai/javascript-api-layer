//get data
/*
http.getData('http://localhost:3000/users')
.then(data => console.log(data))
.catch(err => console.log(err));
*/



//post data
/*

*/

//put data(update)
/*

*/


//Delete data

/*

*/


//$(document).ready(function(){



//})

var ui = new UI;

class Code {

    callGet() {

        /*   
        http.getData('http://localhost:3000/users')
           .then(data => ui.displayGet(data))
           .catch(err => console.log(err));
        */
        fetchData.updateData();
        ui.displayGet(mainData);
    }

    callPost(user) {
        //console.log("post clicked");

        http.postData(path, user)
            .then(data => console.log(data))
            .catch(err => console.log(err));

        fetchData.updateData();
    }

    callPut(id, user) {
        console.log("put clicked");
       // console.log(`http://localhost:3000/users/` + id);
        http.putData(path+id, user)
            .then(data => console.log(data))
            .catch(err => console.log(err));

        fetchData.updateData();
    }

    callDelete(id) {
        console.log("delete clicked");

        http.deleteData(path+id)
            .then(data => console.log(data))
            .catch(err => console.log(err));

        fetchData.updateData();
    }

    postUser(flag) {

        var ID = $("#ID").val();
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var gender = $("#gender").val();
        var age = $("#age").val();
        var email = $("#email").val();
        var companyID = $("#companyID").val();
        //console.log("check.....");
        if (ID !== '' && fname !== '' && lname !== '' && gender !== '' && age !== '' && email !== '' && companyID !== '') {
            //console.log("check 1...");
            const user = {
                id: ID,
                firstName: fname,
                lastName: lname,
                gender: gender,
                age: age,
                email: email,
                companyID: companyID
            }
            if (flag === '0') {
                this.callPost(user);
                ui.showAlert("User Successfully Added...", "alert-success");
            } else if (flag === '1') {
                this.callPut(ID, user);
                ui.showAlert("User Data Successfully Updated...", "alert-info");
            }



        } else {
            //console.log("err");
            ui.showAlert("Please fill all required FIELDS...", "alert-danger");
        }
    }

    getUser() {
        var ID = $("#put-id").val();
        var flag = 0;


        if (ID !== '') {
            mainData.forEach(function (user) {
                console.log(user['id']);
                if (user['id'] == ID) {

                    ui.hide('', 'block', 'none', 'none');    

                    $(".add-person").css("display", "none");
                    $(".put-user").css("display", "block");

                    ui.updatePutForm(user);

                    flag = 1;

                }
                // console.log(user['id']);
            });
        }

        if (flag === 0) {
            ui.showAlert("Invalid ID ", "alert-danger");
        }


    }


    deleteUser() {
        var ID = $("#delete-id").val();
        var flag = 0;


        if (ID !== '') {
            mainData.forEach(function (user) {
                if (user['id'] == ID) {
                    logic.callDelete(ID);

                    ui.showAlert("User Successfully Deleted ...", "alert-success");


                    flag = 1;

                }
                // console.log(user['id']);
            });
        }

        if (flag === 0) {
            ui.showAlert("Invalid ID ", "alert-danger");
        }


    }
}