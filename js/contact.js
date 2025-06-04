//Retrieves for element
const contactForm = document.querySelector("#contactForm");

//Adds event listener
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  //Selects all elements with class of input and returns a node list
  const inputs = document.querySelectorAll(".input");

  //Iterates over the node list
  inputs.forEach((input) => {
    console.log(`Input name: ${input.name}, value: ${input.value}`);
  });
  //Sends alert message on submit
  alert("Thank you. The form information has been recieved.");
});
