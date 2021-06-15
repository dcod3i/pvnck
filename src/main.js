

var serverTime = new Date();

function updateTime() {
    serverTime = new Date(serverTime.getTime() + 1000);
    $('#dateTime').html(serverTime.toGMTString());
}



setInterval(function () {
    updateTime()
}, 1000);
