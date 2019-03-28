function getRequest() {
  const http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      let message = JSON.parse(http.responseText);
      document.getElementById('response').innerHTML = message.message;
    }
    if(http.readyState == 4 && http.status != 200) {
      document.getElementById('response').innerHTML = 'Nesto nije uredu!';
    }
  }
  http.open(`GET`, `https://3d1pftib26.execute-api.eu-west-1.amazonaws.com/dev/hello`, true);
  http.send();
}

function postRequest() {
  let data = {};
  data.name = document.getElementById('name').value;
  let dataJson = JSON.stringify(data);
  let http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      let message = JSON.parse(http.responseText);
      document.getElementById('response').innerHTML = message.message;
    } 
    if(http.readyState == 4 && http.status != 200) {
      document.getElementById('response').innerHTML = 'Nesto nije uredu!';
    }
  }
  http.open("POST", 'https://3d1pftib26.execute-api.eu-west-1.amazonaws.com/dev/hello', true);
  http.setRequestHeader('Content-type', 'application/json');
  http.send(dataJson);
}