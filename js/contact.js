// const contactCardFields = [
//   {
//     name: "contactName",
//   },
//   {
//     name: "contactCity",
//   },
//   {
//     name: "contactEmail",
//   },
//   {
//     name: "currentDogs",
//   },
//   {
//     name: "prevAdopter",
//   },
//   {
//     name: "custSurvery",
//   },
//   {
//     name: "subject",
//   },
//   {
//     name: "message",
//   },
// ];

// const allFields = document.querySelectorAll("input, textarea");

// for (let i = 0; i < contactCardFields.length; i++) {
//   const contactData = contactCardFields[i];
//   if (allFields[i]) {
//     allFields[i].setAttribute("id", contactData.name);
//     allFields[i].setAttribute("name", contactData.name);
//   }
// }

const sendButton = document.querySelector("#sendButton");
sendButton.addEventListener("click", function (event) {
  event.preventDefault();
  alert("Thank you. The form information has been recieved.");
});
