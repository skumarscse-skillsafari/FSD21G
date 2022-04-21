export function getUsers() {
    return fetch('http://localhost:3333/users')
            .then(data => data.json());
}

export function postUser(user) {
    console.log(user);
    return fetch('http://localhost:3333/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(data => data.json());
}