const buttonElement = document.getElementById('submit-btn');
const userInputElements = document.querySelectorAll('.full-name');
const genderInputElements = document.querySelectorAll('.gender');
const textareaElement = document.querySelector('#story');
const listRootElement = document.getElementById('submited-data');
const carOptionsElements = document.querySelectorAll('option');

let genderValue;
let carChoice;

const resetUi = () => {
  for (const userInputs of userInputElements) {
    userInputs.value = '';
  }
  story.value = '';
};

const getGenderValue = () => {
  for (let i = 0; i < genderInputElements.length; i++) {
    if (genderInputElements[i].checked) {
      genderValue = genderInputElements[i].value;
    }
  }
  return genderValue;
};

const getCarValue = () => {
  for (let i = 0; i < carOptionsElements.length; i++) {
    if (carOptionsElements[i].selected) {
      carChoice = carOptionsElements[i].value;
    }
  }
  return carChoice;
};

const addOnScreen = (firstName, lastName, gender, story, carChoice) => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
  <p>Hello my name is <span class="highlighted"> ${firstName} ${lastName}</span></p>
  <p>I am <span class="highlighted"> ${gender}</span></p>
  <p>This is my story <span class="highlighted"> ${story}</span></p>
  <p> My favourite car is<span class="highlighted"> ${carChoice}</span></p>
  <br />
  <br />
  `;
  listRootElement.append(listItem);
};

const renderOnScreenHandler = () => {
  const userRenderedItems = {
    firstName: userInputElements[0].value,
    lastName: userInputElements[1].value,
    gender: getGenderValue(),
    myStory: textareaElement.value,
    car: getCarValue(),
  };

  if (
    userRenderedItems.firstName.trim() === '' ||
    userRenderedItems.lastName.trim() === '' ||
    userRenderedItems.myStory.trim() === ''
  ) {
    alert('invalid input');
    return;
  }

  addOnScreen(
    userRenderedItems.firstName,
    userRenderedItems.lastName,
    userRenderedItems.gender,
    userRenderedItems.myStory,
    userRenderedItems.car
  );
  resetUi();
};

buttonElement.addEventListener('click', renderOnScreenHandler);
