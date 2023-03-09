import React from 'react';
 
export default function Komponenta(props) {
    return (
        <div>
            <article className="komponent">
            <h2>{props.title}</h2>
            <p className="ime">${props.ime}</p>
            <p>{props.description}</p>
        </article>
        </div>
    );
}