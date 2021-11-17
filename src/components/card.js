import '../style.css';

const card = (characters) => {
  const cardsContainer = document.querySelector('.cards');
  // cardContainer.classList.add("card", "grid-container");

  characters.forEach((character) => {
    cardsContainer.innerHTML += `
      <div class="card">
        <img class="character-img" alt=${character.name} src=${character.image} width=200 height=200>
        <div class="name-and-like-container flex-row">
          <span class="character-name">${character.name}</span>
          <div class="likes-container">
            <ion-icon name="heart"></ion-icon><br>
            <span class="likes">10 likes</span>
          </div>
        </div>
        <button type="button" class="comment-btn">Comments  
          <ion-icon name="chatbubble"></ion-icon>
        </button>
      </div>`;
  });
};

export default card;