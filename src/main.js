

function fullDateTime() {
            var d = new Date();          
            var n = d.toLocaleString([], { hour12: true});
            document.getElementById("dateTime").innerHTML = n;
        }


setInterval(function () {
    fullDateTime()
}, 1000);

function myFunction() {
    document.getElementsByTagName('body')[0].style.cssText = "background: linear-gradient( 90deg, rgb(82, 107, 106) 0%, rgb(255, 255, 255) 100% );"
}
