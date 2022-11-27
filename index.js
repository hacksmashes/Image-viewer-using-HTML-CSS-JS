let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let img4 = document.querySelector(".img4");
let img5 = document.querySelector(".img5");
let img6 = document.querySelector(".img6");
let img7 = document.querySelector(".img7");
let img8 = document.querySelector(".img8");
let img9 = document.querySelector(".img9");
let img10 = document.querySelector(".img10");

let count = 0;

function nextImg() {
  count += 1;

  if (count === 1) {
    img1.classList.add("goBack");
    img1.classList.remove("comeFront");
    img10.classList.remove("goBack");

    img2.classList.remove("rotRight");
    img3.classList.remove("rotLeft");
    img3.classList.add("rotRight");
    img4.classList.add("rotLeft");

    img2.classList.add("comeFront");
  } else if (count === 2) {
    img2.classList.add("goBack");
    img1.classList.remove("goBack");
    img2.classList.remove("comeFront");

    img3.classList.remove("backImgs");
    img4.classList.add("backImgs");

    img3.classList.add("comeFront");

    img3.classList.remove("rotRight");
    img4.classList.remove("rotLeft");
    img4.classList.add("rotRight");
    img5.classList.add("rotLeft");
  } else if (count === 3) {
    img3.classList.add("goBack");
    img2.classList.remove("goBack");
    img3.classList.remove("comeFront");

    img3.classList.remove("backImgs");
    img4.classList.add("backImgs");

    img4.classList.add("comeFront");

    img4.classList.remove("rotRight");
    img5.classList.remove("rotLeft");
    img5.classList.add("rotRight");
    img6.classList.add("rotLeft");
  } else if (count === 4) {
    img4.classList.add("goBack");
    img3.classList.remove("goBack");
    img4.classList.remove("comeFront");

    img4.classList.remove("backImgs");
    img5.classList.add("backImgs");

    img5.classList.add("comeFront");

    img5.classList.remove("rotRight");
    img6.classList.remove("rotLeft");
    img6.classList.add("rotRight");
    img7.classList.add("rotLeft");
  } else if (count === 5) {
    img5.classList.add("goBack");
    img4.classList.remove("goBack");
    img5.classList.remove("comeFront");

    img5.classList.remove("backImgs");
    img6.classList.add("backImgs");

    img6.classList.add("comeFront");

    img6.classList.remove("rotRight");
    img7.classList.remove("rotLeft");
    img7.classList.add("rotRight");
    img8.classList.add("rotLeft");
  } else if (count === 6) {
    img6.classList.add("goBack");
    img5.classList.remove("goBack");
    img6.classList.remove("comeFront");

    img6.classList.remove("backImgs");
    img7.classList.add("backImgs");

    img7.classList.add("comeFront");

    img7.classList.remove("rotRight");
    img8.classList.remove("rotLeft");
    img8.classList.add("rotRight");
    img9.classList.add("rotLeft");
  } else if (count === 7) {
    img7.classList.add("goBack");
    img6.classList.remove("goBack");
    img7.classList.remove("comeFront");

    img7.classList.remove("backImgs");
    img8.classList.add("backImgs");

    img8.classList.add("comeFront");

    img8.classList.remove("rotRight");
    img9.classList.remove("rotLeft");
    img9.classList.add("rotRight");
    img10.classList.add("rotLeft");
  } else if (count === 8) {
    img8.classList.add("goBack");
    img7.classList.remove("goBack");
    img8.classList.remove("comeFront");

    img8.classList.remove("backImgs");
    img9.classList.add("backImgs");

    img9.classList.add("comeFront");

    img9.classList.remove("rotRight");
    img10.classList.remove("rotLeft");
    img10.classList.add("rotRight");
    img1.classList.add("rotLeft");
  } else if (count === 9) {
    img9.classList.add("goBack");
    img8.classList.remove("goBack");
    img9.classList.remove("comeFront");

    img9.classList.remove("backImgs");
    img10.classList.add("backImgs");

    img10.classList.add("comeFront");

    img10.classList.remove("rotRight");
    img1.classList.remove("rotLeft");
    img1.classList.add("rotRight");
    img2.classList.add("rotLeft");
  } else if (count === 10) {
    img10.classList.add("goBack");
    img9.classList.remove("goBack");
    img10.classList.remove("comeFront");
    img10.classList.remove("backImgs");

    img1.classList.add("comeFront");

    img1.classList.remove("rotRight");
    img2.classList.remove("rotLeft");
    img2.classList.add("rotRight");
    img3.classList.add("rotLeft");

    count = 0;
  }
  console.log(count);
}
