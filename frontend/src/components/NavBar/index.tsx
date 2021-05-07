import { Link } from 'react-router-dom';
import imgDsDark from '../../assets/img/ds-dark.svg';

export default function NavBar() {
  return (
    <div
      className="d-flex 
      flex-column 
      flex-md-row 
      align-items-center 
      p-3 
      px-md-4 
      mb-3 
      bg-light 
      border-bottom 
      shadow-sm"
    >
      <div className="container">
        <nav className="my-2 my-md-0 mr-md-3">
          <Link to="/">
            <img src={imgDsDark} alt="DevSuperior logo" width={120} />
          </Link>
        </nav>
      </div>
    </div>
  );
}
