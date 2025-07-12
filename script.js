const calculateBtn = document.getElementById("calculateBtn");
const resultDiv = document.getElementById("result");

calculateBtn.addEventListener("click", () => {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100; // نحوله من سم إلى متر

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("⚠️ من فضلك أدخل القيم بشكل صحيح");
    return;
  }

  const bmi = (weight / (height * height)).toFixed(2);
  let category = "";

  if (bmi < 18.5) {
    category = "نحيف";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "وزنك مثالي ✅";
  } else if (bmi >= 25 && bmi < 30) {
    category = "وزنك زائد ⚠️";
  } else {
    category = "سمنة مفرطة ❗";
  }

  resultDiv.innerHTML = `مؤشر كتلة جسمك هو: <span class="text-primary">${bmi}</span><br> التصنيف: <span class="text-success">${category}</span>`;
});
