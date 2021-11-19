import { getCharacter } from './handShake';


const displayHP = () => {
  const response = getCharacter();
  const infoContainer = document.createElement('div');
  const descriptionContainer = document.createElement('div');
  const h1 = document.createElement('h1');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const img = document.createElement('img');

  p1.classList.add('modal-content');
  // img.src = defaultIMG;
  img.classList.add('modal-img');
  img.alt = 'Harry Potter Side Image';
  
  infoContainer.appendChild(h1);
  infoContainer.appendChild(img);
  descriptionContainer.appendChild(p1);
  descriptionContainer.appendChild(p2);
  descriptionContainer.appendChild(p3);
  descriptionContainer.classList.add('description-container');
  infoContainer.appendChild(descriptionContainer);
  const modal = document.getElementById('modal');
  
  modal.appendChild(infoContainer);

  response
  .then(res => {
      h1.innerHTML = res[0].name;
      h1.id = 'modal-title';
      p1.innerHTML= `<strong>Actor: </strong> <span>${res[0].actor}</span>`;
      p1.classList.add = 'modal-actor';
      p1.id = 'modal-content';
      p2.innerHTML= `<strong>House: </strong> <span>${res[0].house}</span>`;
      p2.id = 'modal-content';
      p3.innerHTML= `<strong>Specie: </strong> <span>${res[0].species}</span>`;
      p3.id = 'modal-content';
      img.src = res[0].image;
      img.classList.add = 'modal-img';
      img.id = 'modal-img';
    })
    .catch(err => {
      console.log(err);
    });


  };


export default displayHP;