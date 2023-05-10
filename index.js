const form = document.querySelector(".form-container");
const btnSubmit = document.querySelector(".btn-submit");
const infoContainer = document.querySelector(".info-container");
const groceryList = document.querySelector(".grocery-list");
const Info = document.querySelector(".info");
const pleaseAddItem = document.querySelector(".please-add-item");
const removeList = document.querySelector(".clear-btn");
const footerInfo = document.querySelector(".footer-info");
const Info2 = document.querySelector(".info2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let value = form.item.value.trim();
  let sliceValue = value.slice(1, value.length);
  let firstLetterUpper = value.charAt(0).toUpperCase();

  valueOfNumber = firstLetterUpper + sliceValue;

  if (valueOfNumber) {
    infoContainer.classList.remove("display");
    displayItems(valueOfNumber);
    displayGrocery(valueOfNumber);
    setTimeout(() => {
      Info.classList.add("display");
    }, 3000);
    form.reset();
  }

  if (!valueOfNumber) {
    infoContainer.classList.remove("display");
    Info.classList.remove("display");
    Info.style.border = "2px solid rgb(201, 54, 54)";
    Info.style.color = "rgb(201, 54, 54)";
    Info.innerHTML = '<span class="info">Please Add Grocery Item</span>';

    setTimeout(() => {
      infoContainer.classList.add("display");
    }, 3000);
  }
});

removeList.addEventListener("click", () => {
  if (groceryList.children.length > 0) {
    footerInfo.classList.remove("display");
    Info2.classList.remove("display");
    Info2.style.border = "2px solid rgb(201, 54, 54)";
    Info2.style.color = "rgb(201, 54, 54)";
    Info2.innerHTML = `<span class="info">All Items Deleted</span>`;

    groceryList.innerHTML = "";

    setTimeout(() => {
      footerInfo.classList.add("display");
    }, 3000);
  } else {
    footerInfo.classList.remove("display");
    Info2.classList.remove("display");
    Info2.style.border = "2px solid rgb(201, 54, 54)";
    Info2.style.color = "rgb(201, 54, 54)";
    Info2.innerHTML = `<span class="info">No More Items To Delete</span>`;

    groceryList.innerHTML = "";

    setTimeout(() => {
      footerInfo.classList.add("display");
    }, 3000);
  }
});

groceryList.addEventListener("click", (e) => {
  if (e.target.classList.contains("grocery")) {
    e.target.parentElement.parentElement.remove();

    footerInfo.classList.remove("display");
    Info2.classList.remove("display");
    Info2.style.border = "2px solid rgb(32, 184, 32)";
    Info2.style.color = "rgb(32, 184, 32)";
    Info2.innerHTML = `<span class="info">${e.target.parentElement.previousElementSibling.textContent} Removed From The List</span>`;

    setTimeout(() => {
      footerInfo.classList.add("display");
    }, 3000);
  }
});

const displayGrocery = (valueOfNumber) => {
  groceryList.innerHTML += ` 
    <div class="grocery-item">
        <h4 class="grocery-title">${valueOfNumber}</h4>
        <a href="#" class="grocery-icon grocery">
            <i class="far fa-trash-alt grocery"></i>
        </a>
    </div>`;
};

const displayItems = (valueOfNumber) => {
  Info.classList.remove("display");
  Info.style.border = "2px solid rgb(32, 184, 32)";
  Info.style.color = "rgb(32, 184, 32)";
  Info.innerHTML = `<span>${valueOfNumber} Added To The List</span>`;
};
