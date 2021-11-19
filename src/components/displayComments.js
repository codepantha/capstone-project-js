import { getComments } from './handShake';

const displayComments = (id) => {
  const comment = getComments(id);
  const commentsContainer = document.createElement('div');
  const headComments = document.createElement('h2');
  const comments = document.createElement('p');

  commentsContainer.classList.add('comments-container');
  commentsContainer.id = 'comments-container';
  headComments.innerText = 'Comments:';
  headComments.classList.add('modal-comments');
  headComments.id = 'modal-comments';
  headComments.style.fontWeight = 'bold';
  comments.classList.add('comments');
  comments.id = 'comments';
  
  commentsContainer.appendChild(headComments);
  commentsContainer.appendChild(comments);


  const modal = document.getElementById('modal');
  modal.appendChild(commentsContainer);

  comment
    .then(res => {
      const commentElement = document.createElement('p');
      commentElement.innerHTML = `
        <p>
          ${res[0].creation_date}:
          ${res[0].username}
          <i>said:</i>
          ${res[0].comment}
        </p>
      `;
      if (res % 2 === 0) {
        commentsElement.classList.add('bg-comment');
      }
      commentsContainer.appendChild(commentElement);
    })
    .catch(err => {
      console.log(err);
    });

};

export default displayComments;

