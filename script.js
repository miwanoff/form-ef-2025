const labels = document.querySelectorAll(".form label");
for (let i = 0; i < labels.length; i++) {
  console.log(labels[i].innerHTML);
  let letters = labels[i].innerHTML.split("");
  console.log(letters);
  let newInnerHTML = "";
  for (let j = 0; j < letters.length; j++) {
    const element =`<span style="transition-delay:200ms;">${letters[j]}</span>`;
    console.log(element);
    newInnerHTML += element;
  }
  console.log(newInnerHTML);
}
