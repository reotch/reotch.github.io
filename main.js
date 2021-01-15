const d = new Date();
const year = d.getFullYear();
const month = d.getMonth();
const day = d.getDay();

document.getElementById('copyYear').innerHTML = year;

const user = {
    "firstName": "Richard",
    "lastName": "Sandrok",
    "phones": {
        "voipNumber": "847-868-2028",
        "mobileNumber": "773-430-0306"
    },
    "email": "richard@sandrok.com",
    "twitter": "@richardsandrok",
    "skype": "richard.sandrok",
    "web": "www.sandrok.com",
    "githubProfile": "github.com/reotch"
};

console.log(`${user['firstName']} ${user['lastName']}`);
console.log(user.phones.voipNumber);