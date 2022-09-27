/* ------ menu animations ------ */
const handleMenu = document.querySelector("#hamburger");
const list = document.querySelector("#list-menu");
const toTop = document.querySelector("#to-top");
const listItem = document.querySelectorAll("#list-menu nav ul li a");

handleMenu.addEventListener("change", function () {
  if (this.checked) {
    list.style.display = "flex";
    toTop.style.display = "none";
  } else {
    list.style.display = "none";
    toTop.style.display = "block";
  }
});

listItem.forEach((i) =>
  i.addEventListener("click", function () {
    list.style.display = "none";
    toTop.style.display = "block";
    handleMenu.checked = false;
  })
);

/* ------ email form ------ */

(function () {
  emailjs.init("Nta5oXEWjUqXifHxY");
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      this.contact_number.value = (Math.random() * 100000) | 0;
      emailjs.sendForm("service_iinjtwt", "template_1js1nje", this).then(
        function () {
          console.log("SUCCESS!");
          const inputField = document.querySelectorAll("input");
          inputField.forEach((i) => (i.value = ""));
          const textArea = (document.querySelector("textarea").value = "");
          showModal();
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};

/* modal */

const blurBkg = document.querySelector("main");
const cross = document.getElementById("cross");

showModal = () => {
  const success = (document.getElementById("success").style.display = "flex");
  blurBkg.style.filter = "blur(8px)";
};

cross.addEventListener("click", function () {
  success.style.display = "none";
  blurBkg.style.filter = "blur(0)";
});