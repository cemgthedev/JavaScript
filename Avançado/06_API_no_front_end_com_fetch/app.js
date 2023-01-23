// Baixar e executar o projeto: https://github.com/jakeliny/node-api-discover
const url = "https://localhost:5500/api";

function getUsers() {
    fetch(url)
        .then(response => response.json())
        .then(data => renderAPIResult.textContent = JSON.stringify(data))
        .catch(error => console.error(error));
}

// getUsers();

function getUser(id) {
    fetch(`${url}/${id}`)
        .then(response => response.json())
        .then(data => {
            userAvatar.src = data.avatar;
            userName.textContent = data.name;
            userCity.textContent = data.city;
        })
        .catch(error => console.error(error));
}

//getUser(1);

const newUser = {
        name: "Olivia Zars",
        avatar: "https://picsum.photos/200/300",
        city: "Rio de Janeiro"
    }

function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(data => apiAlert.textContent = data)
        .catch(error => console.error(error));
}

// addUser(newUser);

const updateUser = {
        name: "Olivia",
        avatar: "https://picsum.photos/200/300",
        city: "Quixadá"
    }

function updateUser(updateUser, id) {
    fetch(`${url}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updateUser),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(data => apiAlert.textContent = data)
        .catch(error => console.log(error));
}

// updateUser(updateUser, 1);

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
        .then(response => response.json())
        .then(data => apiAlert.textContent = data)
        .catch(error => console.error(error));
}

// deleteUser(1)
