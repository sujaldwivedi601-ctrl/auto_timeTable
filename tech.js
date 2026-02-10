
document.querySelector("button").addEventListener("click",generateTable)

function generateTable() {
  const input = document.getElementById("subjects").value;
  const time = document.querySelector("#time").value ;
  let subjects = input.split(",").map(s => s.trim());

 const tbody = document.querySelector("#table tbody");
 const thead = document.querySelector("#table thead");
  tbody.innerHTML = "";
  thead.innerHTML = "";

 if (!time || !input) {
    alert("Please fill all fields");
    return;
  }
  if(subjects.length <2){
    alert("Enter more subject") ;
    return ;
  }

  let row = document.createElement("tr") ;
  let th  = document.createElement("th") ;
  th.textContent = "Day \ Time" ;
  row.append(th) ;


// time
  let i=1 ;
 let [h, m] = time.split(":").map(Number);
while (i < subjects.length) {
  let th = document.createElement("th");

  let startH = h;
  let startM = m;
  th.textContent = `${formatTime(startH, startM)}`;

  let endH = h + 1;
  let endM = m;

  // Format function
  function formatTime(H, M) {
    const ampm = H >= 12 ? "PM" : "AM";
    const displayH = H % 12 || 12;
    return `${displayH}:${M} ${ampm}`;
  }

  th.textContent.append = ` – ${formatTime(endH, endM)}`;
  row.append(th);

  // Move to next slot
  h = endH;
  m = endM;

  i++;
}



  // body
  function shuffle(arr) {
    let a = [...arr];
    for (let i = 0, j = i + 1; j < a.length; i++, j++) {
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
// body
  for (let r = 0; r <7; r++) {

        const row = document.createElement("tr");
        const td = document.createElement("td") ;

     switch (r) {
      
      case 0:
        td.textContent = "Monday";
        break;
      case 1:
        td.textContent = "Tuesday";
        break;
      case 2:
        td.textContent = "Wednesday";
        break;
      case 3:
        td.textContent = "Thursday";
        break;
      case 4:
        td.textContent = "Friday";
        break;
      case 5:
        td.textContent = "Saturday";
        break;
      case 6:
        td.textContent = "Sunday";
        break;
    }
    row.append(td);
  

    subjects = (r !== 0) ? shuffle(subjects) : subjects;

    subjects.forEach(val => {
      const cell = document.createElement("td");
      cell.textContent = val;
      row.append(cell);
    });

    tbody.append(row);
  }
}