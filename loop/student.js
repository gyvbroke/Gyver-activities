var students = [
  { name: "Jean", sub1: 85, sub2: 90, sub3: 88, attendance: "Present" },
  { name: "Kirk", sub1: 70, sub2: 75, sub3: 72, attendance: "Absent" },
  { name: "Adrian", sub1: 92, sub2: 94, sub3: 91, attendance: "Present" },
  { name: "khulot", sub1: 92, sub2: 94, sub3: 91, attendance: "Present" },
  { name: "abedes", sub1: 92, sub2: 94, sub3: 91, attendance: "Present" },
  { name: "Ace", sub1: 60, sub2: 65, sub3: 63, attendance: "Absent" }
];

var table = document.getElementById("studentTable");

function computeAverage(a, b, c) {
  return (a + b + c) / 3;
}

function getRemarks(avg) {
  return avg >= 75 ? "Passed" : "Failed";
}

// Always compute remarks before displaying
function displayStudents(list) {
  table.innerHTML = "";

  for (var i = 0; i < list.length; i++) {
    var avg = computeAverage(list[i].sub1, list[i].sub2, list[i].sub3);
    var remarks = getRemarks(avg);

    table.innerHTML +=
      "<tr>" +
      "<td>" + list[i].name + "</td>" +
      "<td>" + list[i].sub1 + "</td>" +
      "<td>" + list[i].sub2 + "</td>" +
      "<td>" + list[i].sub3 + "</td>" +
      "<td>" + avg.toFixed(2) + "</td>" +
      "<td>" + remarks + "</td>" +
      "</tr>";
  }
}

function searchStudent() {
  var search = document.getElementById("searchName").value.toLowerCase();
  var result = [];

  for (var i = 0; i < students.length; i++) {
    if (students[i].name.toLowerCase() === search) {
      result.push(students[i]);
    }
  }

  displayStudents(result);
}

function filterBy(type) {
  var filtered = [];

  for (var i = 0; i < students.length; i++) {
    var avg = computeAverage(students[i].sub1, students[i].sub2, students[i].sub3);
    var remarks = getRemarks(avg);

    // Show if attendance matches OR remarks matches
    if (students[i].attendance === type || remarks === type) {
      filtered.push(students[i]);
    }
  }

  displayStudents(filtered);
}

function showAll() {
  displayStudents(students);
}

// Load all students on page load
showAll();
