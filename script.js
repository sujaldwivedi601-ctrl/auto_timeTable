document.getElementById("generateBtn").addEventListener("click", generateTimetable);

function generateTimetable() {
  const category = document.getElementById("category").value;
  const rows = parseInt(document.getElementById("rows").value);
  const subjectsInput = document.getElementById("subjects").value;
  const duration = document.getElementById("duration").value;
  const startDate = new Date(document.getElementById("startDate").value);
  const endDate = new Date(document.getElementById("endDate").value);

  if (!rows || !subjectsInput || !duration || !startDate || !endDate) {
    alert("Please fill all fields");
    return;
  }

  const subjects = subjectsInput.split(",").map(s => s.trim());
  const tbody = document.querySelector("#timetable tbody");
  tbody.innerHTML = "";

  let currentDate = new Date(startDate);
  let subjectIndex = 0;

  while (currentDate <= endDate && subjectIndex < subjects.length) {
    for (let i = 0; i < rows && subjectIndex < subjects.length; i++) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${currentDate.toDateString()}</td>
        <td>${subjects[subjectIndex]}</td>
        <td>10:00 AM</td>
        <td>${duration} mins</td>
      `;
      tbody.appendChild(row);
      subjectIndex++;
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }
}
