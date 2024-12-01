const buttonEnter = document.getElementById("button-enter");
const birthDate = document.getElementById("date-of-birth");

function userBirthday() {
const ageValue = birthDate.value;
if (ageValue === ""){
  alert("Please enter date of birth 🎂")
} else {
  const userAge = birthdayCalculation(ageValue);
}
}

function birthdayCalculation(ageValue) {
const currentDate = new Date();
const birthYear = new Date(ageValue);

const userAge = currentDate.getFullYear() - birthYear.getFullYear();
console.log(userAge);
}

buttonEnter.addEventListener("click", userBirthday);
