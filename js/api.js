// no :  1
function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}

// no : 2

/* function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data))
}
 */
// call with another function
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function displayUsers(data){
    const ul = document.getElementById('users');
    for (const user of data){
         //console.log(user.name);
        const li = document.createElement('li');
        // li.innerText = user.name;
        li.innerText = ` name: ${user.name}, email: ${user.email}`;
        ul.appendChild(li);
    }
   
}


// no : 3

function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
}



