const form = document.querySelector("form")
form.addEventListener("submit",(e)=>
    {
        e.preventDefault();
        const height=parseInt(document.querySelector("#height").value)
        const weight=parseInt(document.querySelector("#weight").value)
        const result=document.querySelector("#result")
        if (height === "" || height < 0 || isNaN(height)) {
            result.innerHTML = "Please give a valid height (Not a Number)";
          } else if (weight === "" || weight < 0 || isNaN(weight)) {
            result.innerHTML = "Please give a valid weight (Not a Number)";
          } else {
            const bmi = weight / ((height * height) / 10000);
            result.innerHTML = `<span>${bmi.toFixed(2)}</span><br>`;
            if (bmi < 18.6) {
              result.innerHTML += "<span>the given person is under weight</span>";
            } else if (bmi >= 18.6 && bmi < 24.9) {
              result.innerHTML += "<span>the given person is fit</span>";
            } else {
              result.innerHTML += "<span>the given person is over weigh</span>";
            }
          }
    }
)

