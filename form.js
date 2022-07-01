function showTypedValue() {
    var text = document.getElementById("name").value;
    
    // var cookiename=document.getElementById(id);
    console.log(text);
    localStorage.setItem("name",text)
    // console.log(cookiename)
 
} 
 
// let name=document.getElementById('name').value;
// console.log(name);
 

let ename=localStorage.getItem("name");
document.getElementById('Sname').innerHTML=ename;
console.log(ename);
// let fname=localStorage.getItem("name");
// document.getElementById('Sfname').innerHTML=fname;
// console.log(fname);

// let name=localStorage.getItem("name");
// let name=localStorage.getItem("name");
// let name=localStorage.getItem("name");
// let name=localStorage.getItem("name");
// let name=localStorage.getItem("name");
// let name=localStorage.getItem("name");
// console.log(g)

