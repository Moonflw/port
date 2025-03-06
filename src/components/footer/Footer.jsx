
import git from './../../img/icons/gitHub.svg';
import link from './../../img/icons/linkedIn.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="#!">
                <img src={git} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={link} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2025 copyright</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
