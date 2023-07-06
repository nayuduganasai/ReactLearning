import React from "react";
import { Link } from "react-router-dom";

const Posts = () =>{

    const ids =[
        {id:'1',name:'post 1'},
        {id:'2',name:'post 2'},
        {id:'3',name:'post 3'}
    ]
    // const list = ids.map(item =>{
    //     return(
    //         <span key ={item.id}>
    //             <Link to= {item.id}>{item.name}</Link><br/>
    //         </span>
    //     )
    // })
    return  ids.map(item =>{
             return(
                 <span key ={item.id}>
                     <Link to= {item.id}>{item.name}</Link><br/>
             </span>
             )
         })


//         {/*<div>
//          <Link to = "/posts/1">Post 1</Link> <br/>
//            <Link to = "/posts/2">Post 2</Link> <br/>
//            <Link to = "/posts/3">Post 3</Link> <br/> 
//            {list}
//     </div> */}
//     )
}

export default Posts;