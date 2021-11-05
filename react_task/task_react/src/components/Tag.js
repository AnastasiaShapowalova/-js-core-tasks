import React from 'react';


function Tag() {
    const TagItems = [
        {title: 'Tag №1', href:'#'},
        {title: 'Tag №2', href:'#'},
        {title: 'Tag №3', href:'#'},
    ]

    const items =  TagItems.map(items => <div href={TagItems.href}>{items.title}</div>)
    return(
        <div>
            {items}
        </div>
    )

    }
export default Tag