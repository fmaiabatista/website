import './Title.css';
import Signature from './Signature';

function Title() {
  return (
    <div className="Title">
      <p className="word" data-text="CREATIVE">CREATIVE</p>
      <p className="word" data-text="FRONTEND">FRONTEND</p>
      <p className="word" data-text="DEVELOPER">DEVELOPER</p>
      <Signature />
    </div>
  );
}

export default Title;
