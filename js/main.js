const experience_1 = document.getElementById("exp1");

let counter = 0;
document.addEventListener("DOMContentLoaded", function () {
  setInterval(function () {
    if (counter <= Number(experience_1.textContent)) {
      document.getElementById("exp1").textContent = counter;
      counter++;
    }
  }, 500);
});


const projectList = [
  [
    "assets/project-1.jpg",
    "slider",
    "https://github.com/Hadismrd18/menu-project",
  ],
  ["assets/1.jpg", "menu", "https://github.com/Hadismrd18/menu-project"],
  [
    "assets/project-2.jpg",
    "to-do-list",
    "https://github.com/Hadismrd18/menu-project",
  ],
];
function changeProjectOrder() {
  document.getElementById("fig-img-1").src = projectList[0][0];
  document.getElementById("fig-img-2").src = projectList[1][0];
  document.getElementById("fig-img-3").src = projectList[2][0];
  document.getElementById("header-1").textContent = projectList[0][1];
  document.getElementById("header-2").textContent = projectList[1][1];
  document.getElementById("header-3").textContent = projectList[2][1];
  document.getElementById("href-1").href = projectList[0][2];
  document.getElementById("href-1").href = projectList[1][2];
  document.getElementById("href-1").href = projectList[2][2];
}
document.getElementById("right-click").addEventListener("click", function () {
  let removedElement = projectList.pop();
  projectList.unshift(removedElement);
  changeProjectOrder();
});
document.getElementById("nav-right").addEventListener("click", function () {
  let removedElement = projectList.pop();
  projectList.unshift(removedElement);
  changeProjectOrder();
});
document.getElementById("left-click").addEventListener("click", function () {
  let removedElement = projectList.shift();
  projectList.push(removedElement);
  changeProjectOrder();
});
document.getElementById("nav-left").addEventListener("click", function () {
  let removedElement = projectList.shift();
  projectList.push(removedElement);
  changeProjectOrder();
});
const reviewList = [
  [
    "assets/person.jpg",
    "name-1",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. fsdkfalsd fs",
    `                <i
    class="star-icon review-icon fa-solid fa-star"
    style="color: #c69989"
  ></i>
  <i
    class="star-icon review-icon fa-solid fa-star"
    style="color: #c69989"
  ></i>
  <i
    class="star-icon review-icon fa-solid fa-star"
    style="color: #c69989"
  ></i>
  <i
    class="star-icon review-icon fa-solid fa-star"
    style="color: #c69989"
  ></i>
  <i
    class="star-icon review-icon fa-regular fa-star-half-stroke"
    style="color: #c69989"
  ></i>`,
  ],
  [
    "assets/person-2.jpg",
    "name-2",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. fsdkfalsddsfdsgvdfb lkfvdfkv kdsna  aksd k fs",
    `<i
    class="star-icon review-icon fa-solid fa-star"
    style="color: #c69989"
  ></i>
  <i
    class="star-icon review-icon fa-solid fa-star"
    style="color: #c69989"
  ></i>
  <i
    class="star-icon review-icon fa-solid fa-star"
    style="color: #c69989"
  ></i>`,
  ],
  [
    "assets/person-3.jpg",
    "name-3",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    `                <i
    class="star-icon review-icon fa-solid fa-star"
    style="color: #c69989"
  ></i>
  <i
    class="star-icon review-icon fa-solid fa-star"
    style="color: #c69989"
  ></i>                <i
  class="star-icon review-icon fa-regular fa-star-half-stroke"
  style="color: #c69989"
></i>`,
  ],
];
function changeReviewOrder() {
  document.getElementById("review-img").src = reviewList[0][0];
  document.getElementById("review-name").textContent = reviewList[0][1];
  document.getElementById("review-txt").textContent = reviewList[0][2];
  document.getElementById("review-star").innerHTML = "";
  document.getElementById("review-star").innerHTML = reviewList[0][3];
}
document.getElementById("down-click").addEventListener("click", function () {
  let removedElement = reviewList.pop();
  reviewList.unshift(removedElement);
  changeReviewOrder();
});
document.getElementById("up-click").addEventListener("click", function () {
  let removedElement = reviewList.shift();
  reviewList.push(removedElement);
  changeReviewOrder();
});
