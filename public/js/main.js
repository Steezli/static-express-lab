const root = document.getElementById('root');
const colorsList = document.createElement('ul');

fetch(`api/v1/color`)
.then(colors => colors.json())
  .then(colors => {
    colors.forEach(color => {
      console.log(colors)
      const li = document.createElement('li');
      li.style.color = '#' +color.hex;
      li.textContent = `${color.name} - ${color.hex} - ${color.r}, ${color.g}, ${color.b}`;
      colorsList.appendChild(li);
    })
  })
  root.appendChild(colorsList);