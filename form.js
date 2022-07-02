// function showTypedValue() {
//     var text = document.getElementById("name").value;
//      console.log(text);
//     localStorage.setItem("name",text)
//     
 
// } 

// function getid(id){

//      let element =document.getElementById(id);
//     element=element.id;
//     console.log(element);
//     var text = document.getElementById(element).value;
//     localStorage.setItem(id,text)
// }



// let Sval=document.getElementById("subjects");
// Sval.addEventListener('change',sub)
// Sval.addEventListener('change',addSub)
// function sub(){
// console.log(Sval.value)
// }


// let su='';
// function addSub(){

//     for(let i=0; i<Sval.value; i++){
//         // console.log(i)
  
//    su+=  `<div class="subjectMarks">
//     <div class="row">
//         <div>Subject NO:</div>
//          <div id="${i+1}">${i+1}</div>
    
//         <div>Subject Name:</div>
//          <input type="text" id="subjectName${i}"  onchange="getSubId('subjectName${i}')">
    
//         <div>Total Marks:</div>
//          <input type="text" id="totalmarks${i}" onchange="getSubId('totalmarks${i}')">
    
    
//         <div>Obtained Marks:</div>
//          <input type="text" id="obtainedmarks${i}" onchange="getSubId('obtainedmarks${i}')">
//     </div>
// </div>`

//     }

//     document.getElementById('sdetails').innerHTML=su;
// }




// function getSubId(id){
    
//     let element =document.getElementById(id);
//     element=element.id;
//     console.log(element);
//     var Stext=document.getElementById(element).value;
//     localStorage.setItem(id,Stext)
//     console.log(Stext);
  
//     }



    //======================== Fetching Student personal details======================

// let ename=localStorage.getItem("name");
// document.getElementById('Sname').innerHTML=ename;
// console.log(ename);

// let fname=localStorage.getItem("fname");
// document.getElementById('Sfname').innerHTML=fname;
// console.log(fname);

// let cno=localStorage.getItem("cno");
// document.getElementById('Scontact').innerHTML=cno;
// console.log(cno);

// let institute=localStorage.getItem("institute");
// document.getElementById('Sinstitute').innerHTML=institute;
// console.log(institute);


// let classs=localStorage.getItem("class");
// document.getElementById('Sclass').innerHTML=classs;
// console.log(classs);

// let semeseter=localStorage.getItem("Semester");
// document.getElementById('Ssemester').innerHTML=semeseter;
// console.log(semeseter);

// let name=localStorage.getItem("name");

  //======================== Fetching Student subject details======================

//   let sub1=localStorage.getItem("subjectName0");
//   let mark1=localStorage.getItem("totalmarks0")
//   let obtmark1=localStorage.getItem('obtainedmarks0');
// document.getElementById('s1').innerHTML=sub1;
// document.getElementById('m1').innerHTML=mark1;
// document.getElementById('o1').innerHTML=obtmark1;
// console.log(ename);
