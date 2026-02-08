document.querySelector("button").addEventListener("click", generateTimetable);

function generateTimetable() {
  const organisation = document.querySelector("#organisation").value;
  const centre = document.querySelector("#centre").value;
  const roll_num = document.querySelector("#roll_num").value;
  const branch = document.querySelector("#branch").value;
  const sem = document.querySelector("#sem").value ;
  const allsubject = document.querySelector("#subject").value;
  const time = document.querySelector("#timeinput").value;
  const date = document.querySelector("#date").value;

    if (!organisation|| !centre|| !roll_num|| !branch|| !allsubject|| !time|| !date) {
    alert("Please fill all fields");
    return;
  }

 let admit_card = document.querySelector("#admit_card");
let h1 = document.querySelector("#hed") ;
let jaga = document.querySelector("#jaga") ;
let bran = document.querySelector("#bran") ;
let num = document.querySelector("#num") ;
let cls = document.querySelector("#class") ;
h1.textContent = `${organisation }`;
jaga.textContent = `Exam Center : ${centre}`;
bran.textContent = `Coursr/Branch : ${branch}`;
num.textContent = `Roll Number : ${roll_num}` ;
cls.textContent = `Semester : ${sem}` ;

  
  const subjects = allsubject.split(",").map((s) => s.trim());
  const tbody = document.querySelector("#timetable tbody");
  tbody.innerHTML = "";
  let sub_code = Math.floor(Math.random() * (877 - 377 + 1)) + 377;
  let paper_code = Math.floor(Math.random() * (8797 - 3797 + 1)) + 3797;

  // for(let j=0; j<subjects.length; j++){
   

    let startDate = new Date(date);
    for (let i = 0; i < subjects.length; i++) {
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
       td1.textContent = i+1 ;
       row.append(td1) ;

       // date
      let d = new Date(startDate);
      d.setDate(startDate.getDate() + i);
      let day = String(d.getDate()).padStart(2, "0");
      let month = String(d.getMonth() + 1).padStart(2, "0");
      let year = d.getFullYear();
      // date in row   let td2 = document.createElement("td");

      let td2 = document.createElement("td");
      td2.textContent =`${day}-${month}-${year}`;
      row.append(td2) ;

      let td3 = document.createElement("td");
      td3.textContent= sub_code+i ;
      row.append(td3) ;

      let td4 = document.createElement("td");
      td4.textContent= paper_code+i;
      row.append(td4) ;

      let td5 = document.createElement("td");
      td5.textContent= subjects[i] ;
      row.append(td5) ;


    tbody.append(row);

    // }
  }
}
