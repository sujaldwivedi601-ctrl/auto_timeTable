document.querySelector("button").addEventListener("click", generateTimetable);

function generateTimetable() {
  const study_hourse = document.querySelector("#study_hourse").value;
  const day = document.querySelector("#days").value;
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
  time = time / subjects.length;
  if (time < 30) {
    alert("You should give more time to study");
    return;
  }

  // table heading
  let row = document.createElement("tr");
  let i = 0;
  while (i <= day) {
    let th = document.createElement("th");

    switch (i) {
      case 0:
        th.textContent = "Time";
        break;
      case 1:
        th.textContent = "Monday";
        break;
      case 2:
        th.textContent = "Tuesday";
        break;
      case 3:
        th.textContent = "Wednesday";
        break;
      case 4:
        th.textContent = "Thursday";
        break;
      case 5:
        th.textContent = "Friday";
        break;
      case 6:
        th.textContent = "Saturday";
        break;
      case 7:
        th.textContent = "Sunday";
        break;
      default:
        th.textContent = "Day " + i;
    }
    row.appendChild(th);
    i++;
  }
  thead.append(row);





function shuffle(arr) {
  let a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
  i = 0;
  let sub = 0;
  while (i < subjects.length) {
    let row = document.createElement("tr");
    let tdTime = document.createElement("td");
    tdTime.textContent = `${time}minte`;
    row.append(tdTime);

    //shuffled array
    let dayPlans = shuffle(subjects);
    // dayPlans.push();


    for (sub = 0; sub < day; sub++) {
      let td = document.createElement("td");
      td.textContent = dayPlans[sub];
      row.append(td);
    }
    tbody.append(row);
    i++;
  }
}
