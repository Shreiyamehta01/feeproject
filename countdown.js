const endDate = "12 March 2024 8:00:00 PM"
function getUrlParams() {
    var params = {};
    var urlParams = new URLSearchParams(window.location.search);
    urlParams.forEach(function(value, key) {
      params[key] = value;
    });
    console.log(
        "params ",params
    )
    return params;
  }

 var params= getUrlParams();
const inputs = document.querySelectorAll("input");
inputs[0].value=params.days;
inputs[1].value =params.hours;
inputs[2].value =params.minutes;
inputs[3].value = params.seconds;
// function clock() {
//     const end = new Date(endDate)
//     const now = new Date()
//     const diff = (end - now) / 1000;
//     console.log(diff);
//    if (diff < 0) return;

//    inputs[0].value = Math.floor(diff / 3600 / 24);
//     inputs[1].value = Math.floor(diff / 3600) % 24;
//     inputs[2].value = Math.floor(diff / 60) % 60;
//    inputs[3].value = Math.floor(diff) % 60;
// }



// setInterval(
//     () => {
//         clock()
//     },
//     1000
// )




