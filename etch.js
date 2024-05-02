const container = document.querySelector('.container');
const button = document.querySelector('.btn-size');

createGrid(16);

function createGrid(size) {
  if(!Number.isInteger(size)){
    alert("You must enter an integer number");
    return false;
  }

  if(size < 1 || size > 100) {
    alert("The number must be between 1 and 100");
    return false;
  }

  const containerHeight = container.clientHeight;
  const divSize = Math.floor(containerHeight / size);

  console.log("Container: " + containerHeight);
  console.log("Div: " + divSize);

  for(let i=0; i<size;i++) {
    let divFather = document.createElement("div");
    container.appendChild(divFather);

    for(let t=0; t<size; t++) {
      let div = document.createElement("div");
      div.style.backgroundColor = 'blue';
      div.style.border = '2px solid red';
      div.style.height = divSize + "px";
      div.style.width = divSize + "px";

      div.addEventListener('mouseover', (e) => {
        div.style.backgroundColor = "black";
      });

      divFather.appendChild(div);
      
    }
  }
}

button.addEventListener('click', (e) => {
  container.innerHTML='';
  let size = prompt("Enter the size of the Grid (max. 100)");
  createGrid(parseInt(size));
});

