const url = 'http://localhost:5500/api';

function getUsers() {
    axios.get(url)
        .then(response => {
            apiResult.textContent = JSON.stringify(reponse.data);
        })
        .catch(error => console.error(error));
}

// getUsers();

function getUser(id) {
    axios.get(`${url}/${id}`)
        .then(response => {
            const data = response.data;
            userAvatar.src = data.avatar;
            userName.textContent = data.name;
            userCity.textContent = data.city;
        })
        .catch(error => console.error(error));
}

// getUser(1)

const newUser = {
    name: "Olivia Zars",
    avatar: "https://picsum.photos/200/300",
    city: "Rio de Janeiro"
}

function addUser(newUser) {
    axios.post(url, newUser)
        .then(response => response.json())
        .then(data => apiResult.textContent = data)
        .catch(error => console.error(error));
}

// addUser(newUser);

const updateUser = {
    name: "Olivia",
    avatar: "https://picsum.photos/200/300",
    city: "Rio de Janeiro"
}

function updateUser(updateUser, id) {
    axios.post(`${url}/${id}`, updateUser)
        .then(response => response.json())
        .then(data => apiResult.textContent = data)
        .catch(error => console.error(error));
}

// updateUser(updateUser, 1);

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
        .then(response => response.json())
        .then(data => apiResult.textContent = data)
        .catch(error => console.error(error));
}

// deleteUser(1);