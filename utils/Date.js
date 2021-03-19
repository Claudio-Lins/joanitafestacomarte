export function getDate() {
  let newDate = new Date();
  let day = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let horas = newDate.getHours();
  let min = newDate.getMinutes();
  let seg = newDate.getSeconds()
  return `${day}/${month}/${year} - ${horas}:${min}:${seg}`;
}
//setInterval(getDate(), 1000);

// setInterval(function(){ 
// 	getDate();
// }, 1000);

function func(){
    getDate();
  }
  setInterval(func,1000)

// const Clock = () => {
//   return setInterval(function () {
//     let newDate = new Date();
//     let day = newDate.getDate();
//     let month = newDate.getMonth() + 1;
//     let year = newDate.getFullYear();
//     let horas = newDate.getHours();
//     let min = newDate.getMinutes();
//     let seg = newDate.getSeconds();
//     return `${day}/${month}/${year} - ${horas}:${min}:${seg}`;
//   }, 1000);
// };

// export default Clock;
