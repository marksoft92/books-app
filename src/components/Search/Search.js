import React from 'react';
import styles from "./Search.scss";


const Search = props =>{
    return(
        <form
        
         className={styles.component}
         onSubmit={props.submit}>
<input 
        className={styles.input} 
        type="text" 
        value={props.value}
        onChange={props.change}
        placeholder="write" />

<button 
        className={styles.button}>Search</button>


<select 
        value={props.sort} onChange={props.changee} >
                
                <option value=""disabled selected>select</option>
                <option value="+inauthor">Title</option>
                <option value="+inpublisher">Author</option>
                
               
            </select>
        </form>

    )
}
export default Search;