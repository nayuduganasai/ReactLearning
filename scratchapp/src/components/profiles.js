import React from "react";
import { Link, useLocation } from "react-router-dom";
import Card from '../hoc/card';
import Auth from '../hoc/authorize';

const Profiles = () =>{
    const location = useLocation();
    // const prev = useNavigate();

    // const redir = () => {
    //    prev('/')
    // }
    return (
        // <div>
        //     <Link to ={{
        //         pathname:`${location.pathname}/posts`
        //         }}> 
        //          Take me to /profile/posts </Link>
        //           {/* <Link to = "/posts"> 
        //          Take me to /profile/posts </Link> */}

        //          {/* {redir()} */}
        // </div>
        <Auth>
                <Card>

                <Link to ={{pathname:`${location.pathname}/posts`}}> 
                    Take me to /profile/posts </Link>
                </Card>

        </Auth>
        
    )
}

export default Profiles;