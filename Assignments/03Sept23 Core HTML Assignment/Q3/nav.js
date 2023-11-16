const nav = () => {
  return `<header>
  <a href="./home.html">Home</a>
  <a href="./webDevelopement.html">Web Development</a>
      <a href="./webDesign.html">Web Design</a>
    </header>`;
};

const navContainer = document.querySelector("#nav");
navContainer.innerHTML = nav();
