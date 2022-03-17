import "./style.scss"
import { useEffect, useRef } from 'react'
import Button from "../../../../../components/Button/Button";
import { Link } from 'react-router-dom';

function AuthSubmenu({ className, coordinate, isAuth }: {
  className: string,
  coordinate: { center: number, bottom: number },
  isAuth: boolean | null,
}) {
  const { center, bottom } = coordinate;

  if (isAuth) {
    return (
      <div className={className} style={{
        left: "2px",
        top: `${bottom - 10}px`,
      }}>
        <Button context="Log out" className="main-btn log-out-btn" />
      </div>
    )
  }
  else {
    return (
      <div className={className} style={{
        left: "2px",
        top: `${bottom - 12}px`,
      }}>
        <Link to="/register">
          <Button context="Register" />
        </Link>
        <Link to="/login">
          <Button context="Log in" />
        </Link>
      </div>
    )
  }

}

export default AuthSubmenu
