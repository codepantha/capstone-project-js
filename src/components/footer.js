import '../style.css';

const footer = () => {
  const footerElement = document.createElement('footer');
  footerElement.classList = 'footer';

  footerElement.innerHTML = `<p class='footer-text'>
    Made with ❤️ by <a class="footer-link" href="https://github.com/codepantherr">@codepantherr</a> & <a class="footer-link" href="https://github.com/carlos-ssh">@carlos-ssh</a>
  </p>`;
  document.body.appendChild(footerElement);
};

export default footer;
