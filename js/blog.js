// const headline = document.createElement("h3");
// headline.textContent = "Traveling with your Dog";
// document.body.appendChild(headline);

const blogImage = document.createElement("img");
blogImage.src = "./images/blog-1.jpg";

blogImage.alt = "back of girl with arm around dog at the grand canyon";
blogImage.width = "328";
blogImage.height = "310";

const blogPostCont = document.querySelector(".blog-post-container");
blogPostCont.appendChild(blogImage);

const blogTitle = document.createElement("h3");
blogTitle.textContent = "Traveling with your Dog";
blogPostCont.appendChild(blogTitle);

const blogText = document.createElement("article");
blogText.innerHTML =
  "<p>Commodo irure elit ullamco duis ad amet cupidatat. Cillum reprehenderit occaecat amet ea ullamco anim officia nulla proident quis laborum dolore officia ex. Magna irure et elit commodo dolore ullamco ipsum magna aute exercitation non anim. Pariatur fugiat eiusmod culpa commodo amet nostrud excepteur reprehenderit duis consectetur.</p>";
blogPostCont.appendChild(blogText);
