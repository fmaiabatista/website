import './Links.css';
import { VscGithubAlt } from 'react-icons/vsc';
import { ImCodepen } from 'react-icons/im';
import { RiLinkedinLine } from 'react-icons/ri';
import { AiOutlineMessage } from 'react-icons/ai';

function Links() {
  return (
    <div className="Links">
      <div className="icon-li">
        <div className="cube-wrapper">
          <div className="cube">
            <div className="face front">
              <RiLinkedinLine />
            </div>
            <div className="face right">
              <a href="https://www.linkedin.com/in/fmaiabatista/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grad-to-top"></div>
      <div className="icon-gh">
        <div className="cube-wrapper">
          <div className="cube">
            <div className="face front">
              <VscGithubAlt />
            </div>
            <div className="face right">
              <a href="https://github.com/fmaiabatista" target="_blank" rel="noreferrer">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grad-to-left"></div>
      <div className="grad-mid"></div>
      <div className="grad-to-right"></div>
      
      <div className="icon-cp">
        <div className="cube-wrapper">
          <div className="cube">
            <div className="face front">
              <ImCodepen />
            </div>
            <div className="face right">
              <a href="https://codepen.io/fmaiabatista/" target="_blank" rel="noreferrer">
                Codepen
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="grad-to-bottom"></div>
      <div className="icon-em">
        <div className="cube-wrapper">
          <div className="cube">
            <div className="face front">
              <AiOutlineMessage />
            </div>
            <div className="face right">
              <a href="mailto:hi@felipemaia.com">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Links;
