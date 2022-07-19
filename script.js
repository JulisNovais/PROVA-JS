function salvarUsuario() {

  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: document.getElementById('title').value,
      body: document.getElementById('body').value,
      userId: document.getElementById('userId').value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}



 