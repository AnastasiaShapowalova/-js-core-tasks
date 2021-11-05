import React from 'react';

const Pagination = (props) =>{
    const {countArticles, limit} = props
    let pageNum = Math.ceil(countArticles/limit);
    return( 
    <nav>
        <ul>
            <li><a className="page-link" href="#">Previous page</a></li>
 
            { [...Array(pageNum)].map( (item, i) => <li><a href="#">{i+1}</a></li> ) }    
           
            <li><a href="#">Next page</a></li>
        </ul>
    </nav>
    )
}

export default Pagination