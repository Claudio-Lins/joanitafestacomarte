// ///////////////////////////////////////////////////////////////////////////////////////
// export function getURLDepoimentos(path = "") {
//     return `${process.env.API_URL_JOANITA || "https://joanita-api.herokuapp.com"}${path}`;
//   }
//   export async function fetchAPIDepoimentos(path) {
//     const requestUrl = getURLDepoimentos(path);
//     const response = await fetch(requestUrl);
//     const data = await response.json();
//     return data;
//   }
// ///////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////
// export function getURLDestaks(path = "") {
//     return `${process.env.API_URL_JOANITA || "https://joanita-api.herokuapp.com"}${path}`;
//   }
//   export async function fetchAPIDestaks(path) {
//     const requestUrl = getURLDestaks(path);
//     const response = await fetch(requestUrl);
//     const data = await response.json();
//     return data;
//   }
// ///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
export function getURLAPIJoanita(path = "") {
    return `${process.env.API_URL_JOANITA || "http://localhost:1337"}${path}`;
  }
  export async function fetchAPIJoanita(path) {
    const requestUrl = getURLAPIJoanita(path);
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
  }
///////////////////////////////////////////////////////////////////////////////////////