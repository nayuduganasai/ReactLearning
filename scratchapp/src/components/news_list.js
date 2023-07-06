import React from "react";
import NewsItem from "./news_list_item";

const NewsList =  (props) =>{
    const items = props.news.map((item) =>{
        return(
            <NewsItem  key = {item.id} Item = {item}/>
        )
    });


    return(
        <div style={{background:'skyblue',margin:50,padding:50}}>
            <h1>This is props practice using json data</h1>
            {props.children}
            {items} 
        </div>
       
        
    )
}
export default NewsList;