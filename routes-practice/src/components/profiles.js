import React from "react";
import { Link, useLocation ,useHistory, useNavigate, Navigate} from "react-router-dom";

const Profiles = () =>{
    const location = useLocation();
    // const prev = useNavigate();

    // const redir = () => {
    //    prev('/')
    // }
    return (
        <div>
            <Link to ={{
                pathname:`${location.pathname}/posts`
                }}> 
                 Take me to /profile/posts </Link>
                  {/* <Link to = "/posts"> 
                 Take me to /profile/posts </Link> */}

                 {/* {redir()} */}
        </div>
    )
}

export default Profiles;