const modal = async (character) => {
  console.log(character)
  const popUpModal = document.createElement('div');
  popUpModal.classList = "modal";

  popUpModal.innerHTML = 
  `
    <div class="modal-container">
      <button class='close-modal'>X</button>
      <div class="modal-img">
        <img src=${character.image} alt="modal-img">
        <h2>${character.name}</h2>
      </div>

      <div class="modal-info-container">
        <div class="modal-info">
          <p class="modal-info-text">
            House: ${character.house}
          </p>
          <p class="modal-info-text">
            Gender: ${character.gender}
          </p>
          <p class="modal-info-text">
            Ancestry: ${character.ancestry}
          </p>
          <p class="modal-info-text">
            Species: ${character.species}
          </p>
        </div>
      </div>

      <div class="modal-comments-container">
        <div class="modal-comment-title">
          <h3>Comments (2)</h3>
        </div>
        <div class="modal-comments">
          <p class="modal-comment">03/11/2021 Mia: I love Harry Potter</p>
          <p class="modal-comment">03/11/2021 Cleopatra: You're my favourite character ever</p>
        </div>

        <div class="add-comments">
          <h3>Add a comment</h3>
          <div 'comment-form-container'>
            <div class="flex-col">
              <input type='text' class="comment-input" placeholder="Angelina Jolie" required name="name">
              <input type="text" class="comment-input" placeholder="What is your comment?" required name="comment">
              <button type="submit" class="submit-btn">Comment</btn>
            </div>
          </div>
        </div>

      </div>

    </div>
  `;

  document.body.appendChild(popUpModal);

  const closeModal = () => {
    document.querySelector('.modal').remove();
  }
  
  const closeModalButton = document.querySelector('.close-modal');
  closeModalButton.addEventListener('click', () => closeModal());

}



export default modal;