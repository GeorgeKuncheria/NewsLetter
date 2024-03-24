import React from 'react';
import NewsItem from './news_list_item.js';

const NewsList=(props) => {
    // console.log(props);

    const items=props.news.map((item)=>{
        return (
            <NewsItem key={item.id} item={item}/>
        )
    });

    return (
        <div>
        {/* children class  calling from index.js where stuffs inside*/}
        <h1>{props.children}</h1> 
           {items}
        </div>
    )
};

export default NewsList;