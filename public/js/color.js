console.log(window.location.search);

const search = new URLSearchParams(window.location.search);
fetch(`api/v1/color/${name}`)
  .then(res => res.json())