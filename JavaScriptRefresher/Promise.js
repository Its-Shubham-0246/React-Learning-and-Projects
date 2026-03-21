import axios from 'axios'
var success = true;
let promise = new Promise((resolve,reject) => {
 if(success){
  resolve("Data Connected");
 }else{
  reject("Error in Connection");
 }
});

//consuming promise
axios.get("https://jsonplaceholder.typicode.com/users") //
.then(data => {
 console.log(data);
 return data;
})
.then(data => {
 data.forEach(ele => console.log(ele.name));
})
.catch(error => console.log(error))

//async await
