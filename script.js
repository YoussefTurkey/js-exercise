const form = document.getElementById("gradeForm");
const resultTable = document.getElementById("resultTable");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("studentName").value.trim();
  const g1 = parseFloat(document.getElementById("grade1").value);
  const g2 = parseFloat(document.getElementById("grade2").value);
  const g3 = parseFloat(document.getElementById("grade3").value);

  if (name === "" || isNaN(g1) || isNaN(g2) || isNaN(g3)) {
    alert("يرجى إدخال جميع البيانات بشكل صحيح");
    return;
  }

  const total = g1 + g2 + g3;
  const percentage = ((total / 300) * 100).toFixed(2);
  let grade = "";

  if (percentage >= 90) {
    grade = "ممتاز ⭐";
  } else if (percentage >= 80) {
    grade = "جيد جدًا ✅";
  } else if (percentage >= 70) {
    grade = "جيد";
  } else if (percentage >= 60) {
    grade = "مقبول";
  } else {
    grade = "راسب ❌";
  }

  const row = `
    <tr>
      <td>${name}</td>
      <td>${total}</td>
      <td>${percentage}%</td>
      <td>${grade}</td>
    </tr>
  `;

  resultTable.innerHTML += row;
  form.reset();
});
