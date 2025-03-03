const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function validateEmail(email) {
    return email.endsWith('@gmail.com') ? "Valid Email" : "Invalid Email";
}
function validateDOB(dateString) {
    const inputDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    inputDate.setHours(0, 0, 0, 0);
    return inputDate > today ? "Invalid Date" : "Valid Date";
}
rl.question("Enter email: ", (email) => {
    console.log(validateEmail(email));

    rl.question("Enter date of birth (YYYY-MM-DD): ", (dob) => {
        console.log(validateDOB(dob));
        rl.close();
    });
});


