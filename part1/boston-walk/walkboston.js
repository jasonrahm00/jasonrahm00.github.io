import {boston} from './data.js';

function renderPosts(people) {
  const len = people.length;
  const topFive = people.sort((a, b) => a[11] - b[11]).slice(len - 5); // Top Five Earners
  const topEmployees = people.filter(person => person[11] >= 200000); // Anyone making over $200k
  
  // Generate HTML list items with person data
  function generateList(arr) {
    let html = '';

    // Use forEach to iterate over array and built HTML using template literal syntax
      // Person's name (person[8] element) formatted so it reads firstname + lastname
    arr.forEach(person => {
      html += `
        <li class="post">
          <b>${person[8].split(',').reverse().join(' ')}</b>: $${person[11]}
        </li>
      `;
    });

    return html;
  }

  // Add top five earners to the indicated element
  document.getElementById('top-five').innerHTML += `<ul>${generateList(topFive)}</ul>`;

  // Add >200k earners to the indicated element
  document.getElementById('top-employees').innerHTML += `<ul>${generateList(topEmployees)}</ul>`;
}

renderPosts(boston.data);