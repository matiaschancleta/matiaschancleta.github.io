const icons = document.getElementById("contact-icon");
const hoverText = document.getElementById("show-text");

const textMap = {
    icon1: "This is the first icon",
    icon2: "This is the second icon",
    icon3: "This is the third icon",
    icon4: "This is the fourth icon",
    icon5: "This is the fifth icon"
  };
  
  Array.from(icons).forEach(icon => {
    icon.addEventListener("mouseover", () => {
      const iconId = icon.id;
      hoverText.style.display = "block";
      hoverText.innerText = textMap[iconId];
    });
  
    icon.addEventListener("mouseout", () => {
      hoverText.style.display = "none";
    });
  });