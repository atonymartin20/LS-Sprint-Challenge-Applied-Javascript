// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then (res => {
    console.log(res.data);
    res.data.articles.bootstrap.forEach(article => cardCreator(article))
    res.data.articles.javascript.forEach(article => cardCreator(article))
    res.data.articles.jquery.forEach(article => cardCreator(article))
    res.data.articles.node.forEach(article => cardCreator(article))
    res.data.articles.technology.forEach(article => cardCreator(article))
})

const cardCreator = (obj) => {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card');
    
    const headlineDiv = document.createElement('div');
    headlineDiv.classList.add('headline');
    headlineDiv.textContent = obj.headline;
    
    const authorDiv = document.createElement('div');
    authorDiv.classList.add('author');
    
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('img-container');

    const imgDivIMG = document.createElement('img');
    imgDivIMG.src = obj.authorPhoto;
    
    const authorSpan = document.createElement('span');
    authorSpan.textContent = `By ${obj.authorName}`;
    
    cardContainer.appendChild(headlineDiv);
    cardContainer.appendChild(authorDiv);
    authorDiv.appendChild(imgDiv);
    imgDiv.appendChild(imgDivIMG);
    authorDiv.appendChild(authorSpan);
    
    cardsContainer.appendChild(cardContainer)
}