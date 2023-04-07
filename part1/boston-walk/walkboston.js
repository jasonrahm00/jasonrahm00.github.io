import {boston} from './data.js';

function renderPosts(people) {
  const len = people.length;
  let topFive = people.sort((a, b) => a[11] - b[11]).slice(len - 5)
  let topEmployees = people.filter(person => person[11] >= 200000)
  
  function generateList(arr) {
    let html = '';
    arr.forEach(person => {
      html += `
        <li class="post">
          <b>${person[8].split(',').reverse().join(' ')}</b>: $${person[11]}
        </li>
      `
    })
    return html
  }

  // TODO: add code to display the html variable inside a ul element with id="data"
  // Hint: you can use the container parameter's innerHTML property to insert Html tags
  document.getElementById('top-five').innerHTML += `<ul id="data">${generateList(topFive)}</ul>`
  document.getElementById('top-employees').innerHTML += `<ul id="topEmployees">${generateList(topEmployees)}</ul>`
}

renderPosts(boston.data);