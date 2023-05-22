// import { AppState } from "../AppState.js";

// function _drawClock(){
//   let today = new Date();
//   const months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
//   let month = months[today.getMonth()]
//   let date = today.getDate()
//   let hours = today.getHours()
//   let minutes = today.getMinutes()
//   let ampm = "AM"
//   if(minutes < 10){
//       minutes = "0" + minutes;
//   }
//   if(minutes < 1){
//       today.getMinutes = "0" + "0"
//   }
//   if(hours > 12){
//       hours -= 12;
//       ampm = "PM";
//   }
//   document.getElementById('clock').innerHTML = `${hours}<span>:</span>${minutes} <span> </span> ${ampm} <br><h5> ${month} ${date}</h5>`
// }

// export class ClockController{
//   constructor(){
//       AppState.on('clock', _drawClock)
//       setInterval(_drawClock, 1000)
//   }
// }