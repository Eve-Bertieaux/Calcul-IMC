const BMIData = [
    { name: "Maigreur, avez-vous pensé voir une diététicienne et/ou psychologue ? Être en bonne santé est tout aussi bien, non ?", color: "midnightblue", range: [0, 18] },
    { name: "Bonne santé, bravo continuez comme ça !", color: "green", range: [18.1, 25] },
    { name: "Surpoids, avez-vous pensé voir une diététicienne et faire une activité physique ?", color: "lightcoral", range: [25, 30] },
    { name: "Obésité modérée, avez-vous pensé voir une diététicienne et faire une activité physique ?", color: "orange", range: [30, 35] },
    { name: "Obésité sévère, avez-vous pensé voir une diététicienne et faire une activité physique ?", color: "crimson", range: [35, 40] },
    { name: "Obésité morbide, avez-vous pensé voir un psychologue/psychiatre ? L'obésité est devenue la première cause de mortalité dans le monde !", color: "purple", range: 40 },

  // IMC = poids en kg / taille² en m
  
  const form = document.querySelector("form");
  
  form.addEventListener("submit", handleForm);
  
  function handleForm(e) {
    e.preventDefault();
  
    calculateBMI();
  }
  
  const inputs = document.querySelectorAll("input");
  
  function calculateBMI() {
    const height = inputs[0].value;
    const weight = inputs[1].value;
  
    if (!height || !weight || height <= 0 || weight <= 0) {
      handleError();
      return;
    }
  
    const BMI = (weight / Math.pow(height / 100, 2)).toFixed(1);
    console.log(BMI);
  
    showResult(BMI);
  }
  
  const displayBMI = document.querySelector(".bmi-value");
  const result = document.querySelector(".result");
  
  function handleError() {
    displayBMI.textContent = "Comme c'est dommage !";
    displayBMI.style.color = "inherit";
    result.textContent = "Remplissez correctement les inputs.";
  }
  
  function showResult(BMI) {
    const rank = BMIData.find(data => {
      if (BMI >= data.range[0] && BMI < data.range[1]) return data;
      else if (typeof data.range === "number" && BMI >= data.range) return data;
    });
  
    displayBMI.textContent = BMI;
    displayBMI.style.color = `${rank.color}`;
    result.textContent = `Résultat : ${rank.name}`;
  }
  
