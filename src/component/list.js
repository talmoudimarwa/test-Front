import React from 'react';
import Card from './card';

export default function List(props) {
    return (
        <div style={{display:"flex", flexWrap:"wrap" ,margin:"40px 90px 0"}}>
            {props.user.map(e =>
             <Card 
            contact={e}/>)}
        </div>

    )
}