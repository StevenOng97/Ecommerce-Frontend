import "./style.scss"
import { useEffect, useRef } from 'react'
import Button from "../../../../../components/Button/Button";

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
        submenu.style.left = `0px`;
        submenu.style.top = `${bottom}px`;
    }, [coordinate])
    
    if(isAuth) {
        return (
            <div className={className} ref={container}>
                <Button context="Sign in" />
                <Button context="Sign up" />
            </div>
        )
    }
    else {
        return (
            <div className={className} ref={container}>
                <Button context="Log out" />
            </div>
        )
    }
    
}

export default AuthSubmenu
