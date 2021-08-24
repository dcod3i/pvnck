

function fullDateTime() {
            var d = new Date();          
            var n = d.toLocaleString([], { hour12: true});
            document.getElementById("dateTime").innerHTML = n;
        }


setInterval(function () {
    fullDateTime()
}, 1000);
