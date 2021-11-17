import '../style.css';
import sideImage from "../assets/images/hp-side-img.png";

const card = (characters) => {
  const cardsContainer = document.querySelector('.cards');
  const topImage = document.createElement('img');
  topImage.classList = "side-img";
  topImage.src = sideImage;

  characters.forEach((character, index) => {
    cardsContainer.innerHTML += `
      <div class="card">
        <img class="character-img" alt=${character.name} src=${character.image} height=200 data-id=${index}>
        <div class="name-and-like-container flex-row">
          <span class="character-name">${character.name}</span>
          <div class="likes-container">
            <ion-icon class="like" name="heart-outline"></ion-icon><br>
            <span class="likes">10 likes</span>
          </div>
        </div>
        <button type="button" id=comment-btn${index} class="comment-btn" data-id=${index}> 
          <ion-icon class="comment" name="chatbubble"></ion-icon>
        </button>
      </div>`;
  });

  document.body.appendChild(topImage);
  
};

export default card;