import './style.scss';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../../../../components/Button/Button';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../../../redux/actions/auth';

function AuthSubmenu({
  className,
  parentBottomCoordinate,
  isAuth,
}: {
  className: string;
  parentBottomCoordinate: number;
  isAuth: boolean | null;
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutAction = () => {
    navigate('/');
    dispatch(logOut());
  };

  if (isAuth) {
    return (
      <div
        className={className}
        style={{
          left: '2px',
          top: `${parentBottomCoordinate - 10}px`,
        }}
      >
        <Button
          context="Log out"
          className="main-btn log-out-btn"
          onClick={logOutAction}
        />
      </div>
    );
  } else {
    return (
      <div
        className={className}
        style={{
          left: '2px',
          top: `${parentBottomCoordinate - 12}px`,
        }}
      >
        <Link to="/register">
          <Button context="Register" />
        </Link>
        <Link to="/login">
          <Button context="Log in" />
        </Link>
      </div>
    );
  }
}

export default AuthSubmenu;
