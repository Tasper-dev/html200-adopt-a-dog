const blogFields = [
  {
    imgSrc: "./images/blog-1.jpg",
    imgAlt: "back of girl with arm around dog at the grand canyon",
    title: "Traveling with your Dog",
    text: "Commodo irure elit ullamco duis ad amet cupidatat. Cillum reprehenderit occaecat amet ea ullamco anim officia nulla proident quis laborum dolore officia ex. Magna irure et elit commodo dolore ullamco ipsum magna aute exercitation non anim. Pariatur fugiat eiusmod culpa commodo amet nostrud excepteur reprehenderit duis consectetur.",
  },

  {
    imgSrc: "./images/blog-2.jpg",
    imgAlt: "four dogs on leashes at the park",
    title: "How To Walk Multiple Dogs",
    text: "Commodo irure elit ullamco duis ad amet cupidatat. Cillum reprehenderit occaecat amet ea ullamco anim officia nulla proident quis laborum dolore officia ex. Magna irure et elit commodo dolore ullamco ipsum magna aute exercitation non anim. Pariatur fugiat eiusmod culpa commodo amet nostrud excepteur reprehenderit duis consectetur.",
  },
  {
    imgSrc: "./images/blog-3.jpg",
    imgAlt: "silhouette of a girl holding a ball above a seated dog",
    title: "Teach Your Dog To Fetch",
    text: "Commodo irure elit ullamco duis ad amet cupidatat. Cillum reprehenderit occaecat amet ea ullamco anim officia nulla proident quis laborum dolore officia ex. Magna irure et elit commodo dolore ullamco ipsum magna aute exercitation non anim. Pariatur fugiat eiusmod culpa commodo amet nostrud excepteur reprehenderit duis consectetur.",
  },
];

const blogPostCont = document.querySelector(".blog-post-container");

for (let i = 0; i < blogFields.length; i++) {
  const post = blogFields[i];

  const blogPost = document.createElement("div");

  const blogImage = document.createElement("img");
  blogImage.setAttribute("src", post.imgSrc);
  blogImage.setAttribute("alt", post.imgAlt);
  blogImage.setAttribute("width", 328);
  blogImage.setAttribute("height", 310);

  const blogTitle = document.createElement("h3");
  blogTitle.textContent = post.title;

  const blogText = document.createElement("article");
  blogText.innerHTML = post.text;

  blogPost.appendChild(blogImage);
  blogPost.appendChild(blogTitle);
  blogPost.appendChild(blogText);

  blogPostCont.appendChild(blogPost);
}

function blogFields()