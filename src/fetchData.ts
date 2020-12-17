export default function fetchData(httpRequest: string): any {
    fetch(httpRequest)
        .then(response => response.json())
        .then(data => data)
        .catch((error) => console.log(error));
  }
