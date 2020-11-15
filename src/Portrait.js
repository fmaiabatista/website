import './Portrait.css';
import Signature from './Signature';
import photoWebp from './images/profile.webp';
import photoPng from './images/profile.png';

function Portrait() {
  return (
    <div className="Portrait">
      <div className="wrapper">
        <picture>
          <source srcSet={photoWebp} type="image/webp" />
          <img src={photoPng} alt="author portrait" />
        </picture>
        <Signature />
      </div>
    </div>
  );
}

export default Portrait;
