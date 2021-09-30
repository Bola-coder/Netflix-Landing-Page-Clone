// const answers = document.querySelectorAll(".answer");
// const buttons = document.querySelectorAll(".my-btn");

const faq = document.querySelectorAll(".faq");
faq.forEach((event) => {
  event.addEventListener("click", () => {
    event.classList.toggle("active");
  });
});
