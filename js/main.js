const about = document.querySelector("#about");
const contact = document.querySelector("#contact");
const aboutContent = document.querySelector("#about-content");
const contactContent = document.querySelector("#contact-content");

about.addEventListener("click", () => {
  const aboutBox = new WinBox({
    title: "About Me",

    mount: aboutContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});
contact.addEventListener("click", () => {
  const contactBox = new WinBox({
    title: "Contact Me",

    mount: contactContent,
    onfocus: function () {
      this.setBackground("#00aa00");
    },
    onblur: function () {
      this.setBackground("#777");
    },
  });
});

// const rootDataset = document.documentElement.dataset;

// document.onclick = () => {
//   const inDarkMode = rootDataset.theme === "dark";
//   rootDataset.theme = inDarkMode ? "" : "dark";
// };
