/* eslint-disable import/no-cycle */
import { addNewComment, getPopUpCharacterComments } from '../apiCalls';
import commentsCounter from '../commentsCounter';

export const displayComments = async (characterId) => {
  await getPopUpCharacterComments(characterId).then((comments) => {
    const commentsCount = commentsCounter(comments);
    document.getElementById('commentCount').innerText = commentsCount
      ? `Comments: ${commentsCount}`
      : `Comments: ${0}`;
    const modalComments = document.querySelector('.modal-comments');
    modalComments.innerHTML = '';
    comments.forEach((comment) => {
      modalComments.innerHTML += `
          <p class="modal-comment">${comment.creation_date} ${comment.username}: ${comment.comment}</p>
          `;
    });
  });
};

const modal = async (character, characterId) => {
  const popUpModal = document.createElement('div');
  popUpModal.classList = 'modal';
  popUpModal.innerHTML = `
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

      ${displayComments(characterId)}
    
      <div class="modal-comments-container">
        <div class="modal-comment-title">
          <h3 id="commentCount">Comments (2)</h3>
        </div>
        <div class="modal-comments">
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
  };

  const submitBtn = document.querySelector('.submit-btn');

  submitBtn.addEventListener('click', () => {
    const usernameInput = document.querySelector('input[name="name"]');
    const commentInput = document.querySelector('input[name="comment"]');

    const username = usernameInput.value;
    const comment = commentInput.value;

    addNewComment({ characterId, username, comment });

    usernameInput.value = '';
    commentInput.value = '';
  });

  const closeModalButton = document.querySelector('.close-modal');
  closeModalButton.addEventListener('click', () => closeModal());
};
export default modal;
