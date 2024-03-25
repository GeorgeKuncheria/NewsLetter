import React from 'react';
import classes from './../styles/news.module.css';
// using multiple css class files we need to add  a new file name with the std naming convention  <file_name>.module.css
const NewsItem=({item}) => {

    return (
        // calling the class name from the css file
        <div className={classes.news_item} >
            <h3>{item.title}</h3>
            <div>{item.feed}</div>
        </div>

    )
};


export default NewsItem;