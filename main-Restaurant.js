const menu = [
  {
    id: 1,
    title: "Cheese Sandwich",
    category: "breakfast",
    price: 15.99,
    img:"./images/1.png",
    desc: `A delicious and simple cheese sandwich, perfect for a quick and satisfying meal.
More Descriptive:`,
  },
  {
    id: 2,
    title: "diner double",
    category: "Chicken with fries",
    price: 13.99,
    img: "./images/2.png",
    desc: `A classic combination of chicken and crispy fries.`,
  },
  {
    id: 3,
    title: "milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/3.png",
    desc: `A thick, creamy, and delicious milkshake.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "Pizza with Fries",
    price: 20.99,
    img: "./images/4.png",
    desc: `Pizza served with a side of crispy fries.`,
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `
        <button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>
      `;
    })
    .join("");
}

btnContainer.innerHTML = categoryBtns;
const filterBtns = btnContainer.querySelectorAll(".filter-btn");

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    if (category === "all") {
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuCategory);
    }
  });
});

