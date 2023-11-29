// Inserting HTML element in DOM using Vanilla JS

const title = 'React Bible'
const root = document.getElementById('root')
const mainHeading = document.createElement('h1')
mainHeading.innerText = title
root.appendChild(mainHeading)
