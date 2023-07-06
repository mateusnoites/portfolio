const database = getDatabase();
const usersRef = ref(database, "users");

/*usersRef.once("value")
  .then(function(snapshot) {
    var userList = document.getElementById("user-list");
    snapshot.forEach(function(childSnapshot) {
      var user = childSnapshot.val();
      var userName = user.name;
      var userEmail = user.email;
      var listItem = document.createElement("li");
      listItem.innerHTML = "<strong>" + userName + "</strong> - " + userEmail;
      userList.appendChild(listItem);
    });
  });*/

onValue(usersRef, (snapshot) => {
  const userList = document.getElementById("user-list");
  snapshot.forEach((childSnapshot) => {
    const user = childSnapshot.val();
    const userName = user.name;
    const userEmail = user.email;
    const listItem = document.createElement("li");
    listItem.innerHTML = "<strong>" + userName + "</strong> - " + userEmail;
    userList.appendChild(listItem);
  });
});