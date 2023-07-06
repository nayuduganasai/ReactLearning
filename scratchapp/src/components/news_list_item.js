import React from "react";
import {css} from 'glamor';

const NewsItem = ({Item}) =>{

    let news_item = css({
        padding:'10px',
        boxSizing:'border-box',
        borderBottom:'2px solid gold',
        margin:'10px',
        borderRadius:'10px',
        background:'white',
        ':hover':{
            color:'blue '
        }
    })


    return(
        <div className ={`${news_item}`}>
                <h3>{Item.id}.{Item.title}</h3>
                <div>{Item.feed}</div>
            </div>
    )
}

export default NewsItem;