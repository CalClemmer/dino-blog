import React from 'react';
// import the comment component
import Comment from './Comment.js';
import './index.css'

function Dino(props){
    let allComments = props.comments.map((c, i)=>{
        return <Comment key={i} body={c}/>
    });

    return (
        <div className='dino'>
            <h1>{props.title}</h1>
            <h2>by {props.author}</h2>
            <h3>{props.body}</h3>
            <h3>Comments:</h3>
            {allComments}
        </div>
    )
}

export default Dino;