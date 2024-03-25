const apiCalls = ['motd', 'serverversion', 'currentplayercount', 'maxplayercount', 'servername'];
for (let i = 0; i < apiCalls.length; i++) {
  const apiUrl = '/api/v1/' + apiCalls[i];

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const dataContainer = document.getElementById(apiCalls[i]);
      if (dataContainer) {
        dataContainer.textContent = data[0];
      } else {
        console.error('Element with id ' + apiCalls[i] + ' not found.');
      }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}


  const apiUrl = '/api/v1/playernames';

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const dataContainer = document.getElementById("playernames");
      if (dataContainer) {
        data.forEach(item => {
              const element = document.getElementById('playernames');
              element.textContent = item.NAME;
              dataContainer.appendChild(element + " ");
              });
      } else {
        console.error('Element with id ' + apiCalls[i] + ' not found.');
      }
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
