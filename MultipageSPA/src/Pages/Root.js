import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";
import classes from './Root.module.css';

const Rootlayout = ()=>{
    return(
        <>
            <MainNavigation/>
            <main className={classes.content}>
                <Outlet/>
            </main>
        </>
    );
}

export default Rootlayout;