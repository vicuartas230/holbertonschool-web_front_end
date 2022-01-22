function welcomeMessage (fullName) {
    function welcome () {
        alert("Welcome " + fullName);
    }
    return welcome;
};

let guillaume = welcomeMessage('Guillaume');
let alex = welcomeMessage('Alex');
let fred = welcomeMessage('Fred');
