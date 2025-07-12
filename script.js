const convertBtn = document.getElementById("convertBtn");
const egpInput = document.getElementById("egpInput");
const usdResult = document.getElementById("usdResult");
const eurResult = document.getElementById("eurResult");

// أسعار صرف ثابتة (كمثال فقط)
const usdRate = 47.5;
const eurRate = 52;

convertBtn.addEventListener("click", () => {
  const egpAmount = parseFloat(egpInput.value);

  if (isNaN(egpAmount) || egpAmount <= 0) {
    alert("من فضلك أدخل مبلغ صحيح بالجنيه");
    return;
  }

  const usd = (egpAmount / usdRate).toFixed(2);
  const eur = (egpAmount / eurRate).toFixed(2);

  usdResult.textContent = usd;
  eurResult.textContent = eur;
});
