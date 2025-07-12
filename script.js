const form = document.getElementById("contactForm");
const contactsTable = document.getElementById("contactsTable");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || phone === "" || email === "") {
    alert("من فضلك أدخل جميع البيانات");
    return;
  }

  const row = `
    <tr>
      <td>${name}</td>
      <td>${phone}</td>
      <td>${email}</td>
    </tr>
  `;

  contactsTable.innerHTML += row;
  form.reset();
});
