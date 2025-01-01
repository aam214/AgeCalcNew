const buttonEnter = document.getElementById("button-enter");
const birthDate = document.getElementById("date-of-birth");
const yourAge = document.getElementById("your-age");
const enterDate = document.getElementById("enter-date");

function enterUserBirthday() {
const ageValue = birthDate.value;
if (ageValue === ""){
  enterDate.innerHTML = "Please enter date of birth ⚠️"
  setTimeout(() => {
   enterDate.innerHTML = ""; 
  }, 3500);
} else {
  const userAge = birthdayCalculation(ageValue);
  userAllowed(userAge);
}
}


function birthdayCalculation(ageValue) {
const currentDate = new Date();
//Compares birthday with the current date
const birthDay = new Date(ageValue);

let userAge = currentDate.getFullYear() - birthDay.getFullYear();
const userBirthMonth = currentDate.getMonth() - birthDay.getMonth();

//Checks if birthday has occured yet if not subtract by one
if (userBirthMonth < 0 || 
(userBirthMonth === 0 && currentDate.getDate() < birthDay.getDate())){
  userAge--;
}
return userAge;
}

function userAllowed(userAge) {
  if (userAge === 21 || userAge >21) {
    yourAge.innerHTML = "Welcome to the brewery!🍻"
  } else{
    yourAge.innerHTML ="You must be 21 to enter the site."
  }
}

buttonEnter.addEventListener("click", userBirthday);
