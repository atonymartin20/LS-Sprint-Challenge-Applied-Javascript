// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());

function Header() {
    const headerDiv = document.createElement('div');
    headerDiv.classList.add('header');

    const headerDateSpan = document.createElement('span');
    headerDateSpan.classList.add('date');
    headerDateSpan.textContent = 'MARCH 28, 2019';

    const headerH1 = document.createElement('h1');
    headerH1.textContent = 'Lambda Times';

    const headerTempSpan = document.createElement('span');
    headerTempSpan.classList.add('temp');
    headerTempSpan.textContent = '98°';

    headerDiv.appendChild(headerDateSpan);
    headerDiv.appendChild(headerH1);
    headerDiv.appendChild(headerTempSpan);

    return headerDiv
}