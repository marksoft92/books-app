import React from 'react';
import Result from '../Result/Result';
import styles from './Results.scss';

const Results = (props) => {
    return (
      <div className={styles.component}>
        {
          props.books.map((book,etag) => {
            return <div key={etag}><Result  items={book} /></div>
          })
        }
       
      </div>
      
    );
}
  export  default Results;