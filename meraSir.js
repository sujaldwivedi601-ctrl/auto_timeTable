document.querySelector("button").addEventListener("click", generateTimetable);

function generateTimetable() {
  const study_hourse = document.querySelector("#study_hourse").value;
  const day = Number(document.querySelector("#days").value);
  const allSubject = document.querySelector("#subject").value;

  if (!study_hourse || !day || !allSubject) {
    alert("Please fill all fields");
    return;
  }

  const subjects = allSubject.split(",").map((s) => s.trim());
  const tbody = document.querySelector("#timetable tbody");
  const thead = document.querySelector("#timetable thead");
  tbody.innerHTML = "";

  // kitana time ek subject ko mileja if 30 se km to return
  let time = study_hourse * 60;
  time /=  subjects.length;
  if (time < 30) {
    alert("You should give more time to study");
    return;
  }

  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function shuffle(arr) {
    let a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  let row = document.createElement("tr");
  let tdHED = document.createElement("td");
  tdHED.textContent ="Day/Time";
  row.append(tdHED) ;

  subjects.forEach(() => {
    let tdTime = document.createElement("td");
      tdTime.textContent = `${time}` ;
      row.append(tdTime) ; 
  });
  thead.append(row) ;

  i = 0;
  while (i <= subjects.length ) {

    let row = document.createElement("tr");
    let tday = document.createElement("td");
    tday.textContent = days[i] ;
    row.append(tday) ;
    
    //shuffled array
    let dayPlans = shuffle(subjects);
    // dayPlans.push();

    for (let sub = 0; sub < day; sub++) {
    let tday = document.createElement("td");
      tday.textContent = dayPlans[sub];
      row.append(tday);
    }
    tbody.append(row);
    i++;

  }
}
