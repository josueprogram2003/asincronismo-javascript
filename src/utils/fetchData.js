export const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest();
    //* El tercer valor de open es para activar el asincronismo por defecto esta en true osea activado.
    xhttp.open("GET", url_api, true);
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4) {
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error("ERROR", url_api));
      }
    };
    xhttp.send();
  });
};
