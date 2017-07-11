
function correctMethodName() {
    return "Output Message";
};

try {
    var result = wrongMethodName(3);
    document.writeln(result);
}
catch (error) {
    document.writeln('An error occured');
}


//show your location
function getPositionResult(position) {
    console.log(position.coords.latitude + ' ' + position.coords.longitude);
}
navigator.geolocation.getCurrentPosition(getPositionResult);
