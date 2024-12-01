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
const birthDay = new Date(ageValue);

const userYear = currentDate.getFullYear() - birthDay.getFullYear();


const userMonth = currentDate.getMonth() - birthDay.getMonth();
console.log(userMonth);

if (userMonth < 0 || (userMonth === 0 && currentDate.getDate() < b))
}

buttonEnter.addEventListener("click", userBirthday);
