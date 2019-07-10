console.log(window.location.search);

const search = new URLSearchParams(window.location.search);
fetch(`api/v1/index`)
  .then(res => res.json())
  .then(dog => console.log(index));