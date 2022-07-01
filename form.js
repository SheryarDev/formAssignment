// function showTypedValue() {
//     var text = document.getElementById("name").value;
//      console.log(text);
//     localStorage.setItem("name",text)
//     
 
// } 

function getid(id){

     let element =document.getElementById(id);
    element=element.id;
    console.log(element);
    var text = document.getElementById(element).value;
    localStorage.setItem(id,text)
}



let ename=localStorage.getItem("name");
document.getElementById('Sname').innerHTML=ename;
console.log(ename);

let fname=localStorage.getItem("fname");
document.getElementById('Sfname').innerHTML=fname;
console.log(fname);

let cno=localStorage.getItem("cno");
document.getElementById('Scontact').innerHTML=cno;
console.log(cno);

let institute=localStorage.getItem("institute");
document.getElementById('Sinstitute').innerHTML=institute;
console.log(institute);


let classs=localStorage.getItem("class");
document.getElementById('Sclass').innerHTML=classs;
console.log(classs);

let semeseter=localStorage.getItem("Semester");
document.getElementById('Ssemester').innerHTML=semeseter;
console.log(semeseter);

// let name=localStorage.getItem("name");

