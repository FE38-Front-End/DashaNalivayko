var data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    }, {
        firstName:'Bradley',
        lastName: 'Pitt',
        age: 54
    }, {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    }
];

const Surname = prompt('Enter your surname', '');
const noResults = 'No results found for your request';

for (let i = data.length; i < data.length; i++) {
    if (data[i].lastName === Surname) {
        var userName = `user name: ${data[i].firstName} ${data[i].lastName}.
                        user age: ${data[i].age}.`;
        break
    }
    
}

if (userName) {
    alert(userName);
} else {
    alert(noResults);
}