import React, { Component } from 'react';
import styles from './Result.scss'

const Result = (props) => {
    const { volumeInfo } = props.items;

    const {title, authors, description, publishedDate} = props.items.volumeInfo;
    const thumbNail = volumeInfo.hasOwnProperty('imageLinks') == false ? "https://vignette.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?cb=20141028171337" : volumeInfo.imageLinks.thumbnail;
    const publishYear = volumeInfo.hasOwnProperty('publishedDate') == false ? volumeInfo['publishedDate'] = "0000" : volumeInfo.publishedDate;
    const descriptionInfo =volumeInfo.hasOwnProperty('description') ==false ? volumeInfo['description']= "its empty " : volumeInfo.description;
    return (
    
       
      <div className={styles.component}>
        <img className={styles.imgstyle} src={thumbNail} alt=""/>
        <div>
          <h2>Title: {title}</h2>
          <h3 className={styles.author}>Author: {authors}</h3>
          <p>Short description about book: {descriptionInfo=="its empty"? "its empty":descriptionInfo.substring(0,70)}</p>
          <p>Published: {publishYear == "0000" ? "Not available" : publishYear.substring(0,4)}</p>                        
        </div>
        
        
      </div>
      
      
    );}
  export default Result;