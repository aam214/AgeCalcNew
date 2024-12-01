const buttonEnter = document.getElementById("button-enter");
const birthDate = document.getElementById("date-of-birth");
const yourAge = document.getElementById("your-age");

function userBirthday() {
const ageValue = birthDate.value;
if (ageValue === ""){
  alert("Please enter date of birth 🎂")
} else {
  const userAge = birthdayCalculation(ageValue);
  console.log(userAge);
}
}

function birthdayCalculation(ageValue) {
const currentDate = new Date();
const birthDay = new Date(ageValue);

let userAge = currentDate.getFullYear() - birthDay.getFullYear();
const userBirthMonth = currentDate.getMonth() - birthDay.getMonth();

if (userBirthMonth < 0 || 
(userBirthMonth === 0 && currentDate.getDate() < birthDay.getDate())){
  userAge--;
}
return userAge;
}

buttonEnter.addEventListener("click", userBirthday);
