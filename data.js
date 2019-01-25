var mainData;

const path = 'http://localhost:3000/users/';
class FetchData{

    constructor(){
        this.updateData();
    }

    updateData(){

        http.getData('http://localhost:3000/users')
        .then(data => mainData = data)
        .catch(err => console.log(err));
    
    }
    
}

var fetchData = new FetchData;