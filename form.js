// number =parseInt('45.665');//pareFloat ignore the number after the decimal
// console.log(number.toFixed(6),(typeof number));
// let stri=Number('45544');
//  console.log(stri,(typeof stri))

//======================storing student perosonall detail on local storage=====================
  function getid(id){
  let element =document.getElementById(id);
  element=element.id;
  // console.log(element);
  var text = document.getElementById(element).value;
  localStorage.setItem(id,text)
  }
  
  //====================Storing student Subject details on local storage==============================
  function getSubId(id){
  let element =document.getElementById(id);
  element=element.id;
  // console.log(element);
  var Stext=document.getElementById(element).value;
  localStorage.setItem(id,Stext)
  // console.log(Stext);
  }
  
  
  //=========================Adding student subjects====================================
  let Sval=document.getElementById("subjects");
  Sval.addEventListener('change',addSub)
  // Sval.addEventListener('change',sub)
  // function sub(){
  // //console.log(Sval.value)
  // }
  
  let su='';
  function addSub(){
  
  for(let i=0; i<Sval.value; i++){
     // console.log(i)
  
  su+=  `<div class="subjectMarks">
  <div class="row">
     <div>Subject NO:</div>
      <div id="${i+1}">${i+1}</div>
  
     <div>Subject Name:</div>
      <input type="text" id="subjectName${i}"  onchange="getSubId('subjectName${i}')">
        
     <div>Total Marks:</div>
      <input type="text" id="totalmarks${i}" onchange="getSubId('totalmarks${i}')">
  
      
     <div>Obtained Marks:</div>
      <input type="text" id="obtainedmarks${i}" onchange="getSubId('obtainedmarks${i}')">
      <Span id="error${i}" class="error"></span>
  </div>
  </div>`
  

  }

  document.getElementById('sdetails').innerHTML=su;

}
  
//=================================throw error if obtained marks is less than total marks=====================
  let  error=function(){
         for(let i=0; i<Sval.value; i++){
         //  totalMark=Number(document.getElementById(`totalmarks${i}`).value);
    //       console.log( totalMark,typeof(totalMark));
    //    obttmarks=Number(document.getElementById(`obtainedmarks${i}`).value); 
    //   console.log(obttmarks ,typeof(totalMark))
      
      if(Number(document.getElementById(`totalmarks${i}`).value)< Number(document.getElementById(`obtainedmarks${i}`).value))
      {
        console.log("hello")
        document.getElementById(`error${i}`).innerHTML="error: total marks must <br>be Greater than obtained marks"
      }else{
        document.getElementById(`error${i}`).innerHTML=""
      }
    }
   
}

  //===========================Clearing previous store data on local storage======================================
  function clearlocalStorage(){
      localStorage.clear();
  }

    //======================== Fetching Student personal details======================

   
     function fetchStudentId(id){
      let sid =document.getElementById(id);
      sid=sid.id;
      // console.log(sid)
      let elem=localStorage.getItem(sid);
      // console.log(elem);
      document.getElementById(id).innerHTML=elem;
        //  console.log(ename);
    }
     


  //======================== Fetching Student subject details======================

//   function fetchStudetnSubId(id){
//     let Subid=document.getElementById(id);
//     Subid=Subid.id;
//     let  markid=document.getElementById(id);
//     markid=markid.id;
//     let obtmarkid=document.getElementById(id);
//     obtmarkid=obtmarkid.id;

//   let sub1=localStorage.getItem(Subid);
//   let mark1=localStorage.getItem(markid)
//  let obtmark1=localStorage.getItem(obtmarkid);
//  document.getElementById('s1').innerHTML=sub1;
// document.getElementById('m1').innerHTML=mark1;
// document.getElementById('o1').innerHTML=obtmark1;
//   }


  function  fetchStudetnSubDetail(){

   let sub0=localStorage.getItem("subjectName0");
  let mark0=localStorage.getItem("totalmarks0")
  let obtmark0=localStorage.getItem('obtainedmarks0');
document.getElementById('s0').innerHTML=sub0;
document.getElementById('m0').innerHTML=mark0;
document.getElementById('o0').innerHTML=obtmark0;

  let sub1=localStorage.getItem("subjectName1");
  let mark1=localStorage.getItem("totalmarks1")
  let obtmark1=localStorage.getItem('obtainedmarks1');
document.getElementById('s1').innerHTML=sub1;
document.getElementById('m1').innerHTML=mark1;
document.getElementById('o1').innerHTML=obtmark1;

  let sub2=localStorage.getItem("subjectName2");
  let mark2=localStorage.getItem("totalmarks2")
  let obtmark2=localStorage.getItem('obtainedmarks2');
document.getElementById('s2').innerHTML=sub2;
document.getElementById('m2').innerHTML=mark2;
document.getElementById('o2').innerHTML=obtmark2;

  let sub3=localStorage.getItem("subjectName3");
  let mark3=localStorage.getItem("totalmarks3")
  let obtmark3=localStorage.getItem('obtainedmarks3');
document.getElementById('s3').innerHTML=sub3;
document.getElementById('m3').innerHTML=mark3;
document.getElementById('o3').innerHTML=obtmark3;

  let sub4=localStorage.getItem("subjectName4");
  let mark4=localStorage.getItem("totalmarks4")
  let obtmark4=localStorage.getItem('obtainedmarks4');
document.getElementById('s4').innerHTML=sub4;
document.getElementById('m4').innerHTML=mark4;
document.getElementById('o4').innerHTML=obtmark4;

  let sub5=localStorage.getItem("subjectName5");
  let mark5=localStorage.getItem("totalmarks5")
  let obtmark5=localStorage.getItem('obtainedmarks5');
document.getElementById('s5').innerHTML=sub5;
document.getElementById('m5').innerHTML=mark5;
document.getElementById('o5').innerHTML=obtmark5;

  let sub6=localStorage.getItem("subjectName6");
  let mark6=localStorage.getItem("totalmarks6")
  let obtmark6=localStorage.getItem('obtainedmarks6');
document.getElementById('s6').innerHTML=sub6;
document.getElementById('m6').innerHTML=mark6;
document.getElementById('o6').innerHTML=obtmark6;

  let sub7=localStorage.getItem("subjectName7");
  let mark7=localStorage.getItem("totalmarks7")
  let obtmark7=localStorage.getItem('obtainedmarks7');
document.getElementById('s7').innerHTML=sub7;
document.getElementById('m7').innerHTML=mark7;
document.getElementById('o7').innerHTML=obtmark7;

  }
//=========================form validation====================
function validateForm(){
 
  // var name,fname,email,cno,institute,classs,Semester;
  
  // name=document.getElementById("name").value;
  // fname=document.getElementById("fname").value;
  // cno=document.getElementById("cno").value;
  // institute=document.getElementById("institute").value;
  // classs=document.getElementById("class").value;
  // Semester=document.getElementById("Semester").value;
  // email=document.getElementById("email").value

  
  // if(name == "" || fname== "" ||  cno =="" || institute=="" || classs=="" || Semester=="" || email=="")
  // {
  //     alert("Requried fields mustbe filled")
  //     return false;
  // }
  // else {
     
  //  return true;

  
  // }

}