import "./style.scss"
import { useEffect, useRef } from 'react'
import Button from "../../../../../components/Button/Button";
import { Link } from 'react-router-dom';

function AuthSubmenu({ className, coordinate, isAuth }: {
    className: string,
    coordinate: { center: number, bottom: number },
    isAuth: boolean | null,
}) {
    const container = useRef<any>(null);
    console.log(coordinate);
    useEffect(() => {
        const submenu = container.current;
        const { center, bottom } = coordinate;
        submenu.style.left = `2px`
        submenu.style.top = `${bottom - 10}px`;
    }, [coordinate])

    if (isAuth) {
        return (
            <div className={className} ref={container}>
                <Button context="Log out" className="main-btn log-out-btn" />
            </div>
        )
    }
    else {
        return (
            <div className={className} ref={container}>
                <Link to="/register">
                    <Button context="Register" />
                </Link>
                <Button context="Log in" />
            </div>
        )
    }

}

export default AuthSubmenu
