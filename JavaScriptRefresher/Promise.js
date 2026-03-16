var success = true;

let promise = new Promise((resolve,reject) => {
 if(success){
  resolve("Data Connected");
 }else{
  reject("Error in Connection");
 }
});

//consuming promise
fetch("https://jsonplaceholder.typicode.com/users") //
.then(response => response.json())
.then(data => {
 console.log(data);
 return data;
})
.then(data => {
 data.forEach(ele => console.log(ele.name));
})
.catch(error => console.log(error))

