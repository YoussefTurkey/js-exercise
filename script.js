const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const dataBody = document.getElementById("dataBody");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  const password = generatePassword(name, email);
  addRow(name, email, password);

  // Reset form
  form.reset();
});

function generatePassword(name, email) {
  const part1 = name.slice(0, 3).toLowerCase();
  const part2 = email.slice(0, 3).toLowerCase();
  const randomNum = Math.floor(100 + Math.random() * 900); // random 3-digit number
  return part1 + part2 + randomNum;
}

function addRow(name, email, password) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${password}</td>
  `;
  dataBody.appendChild(tr);
}
