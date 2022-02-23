
function loadPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhoto(data))
}

loadPhotos();

function displayPhoto(photos){
    const photoContainer = document.getElementById('photos');
    for(const photo of photos){
        const div = document.createElement('div');//<img>${photo.url}</img> it's wrong
        div.innerHTML = `
        <h3>${photo.title}</h3>
        <img src="${photo.url}"/>
        `;
        photoContainer.appendChild(div);
    }

}
