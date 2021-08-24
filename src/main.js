

function fullDateTime() {
            var d = new Date();          
            var n = d.toLocaleString([], { hour12: true});
            document.getElementById("dateTime").innerHTML = n;
        }


setInterval(function () {
    fullDateTime()
}, 1000);

function darkMod() {
    document.getElementsByTagName('body')[0].style.cssText = "background: linear-gradient( 90deg, rgb(82, 107, 106) 0%, rgb(255, 255, 255) 100% );"
}

function dayMod() {
    document.getElementsByTagName('body')[0].style.cssText = "background: linear-gradient( 90deg, rgba(30, 201, 197, 1) 0%, rgba(250, 255, 138, 1) 100% );"
}
