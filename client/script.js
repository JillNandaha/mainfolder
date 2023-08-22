const usersDiv = document.getElementById("user_list");

async function getUsers() {
  // Make an API call to our server to get the list of users
  const response = await fetch("http://localhost:3000/users");

  // Wait foe the promise to get resolved, and you'll have your user data
  const users = await response.json();

  // Display the users
  if (users?.data.length > 0) {
    users.data.forEach((user) => {
      const li = document.createElement("li");
      li.innerText = user;

      usersDiv.appendChild(li);
    });
  }
}

getUsers();
