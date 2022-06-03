import React from "react";
import "./SubReddit.css";


export default function SubReddit(props) {

    const displaySubreddits = (props) => {
        const {subReddits} = props;

        if (subReddit.length > 0 ) {
            return subReddits.map((subReddit, index) =>{
                console.log(subReddit);
                return(
                    <h1 className="category" key={index}> {subReddit}</h1>
                );
            });
        }else{
            return <h3>Loading..</h3>
        }
    }
return (
    <div className="subreddit">
        <h2>Subreddit</h2>
        {displaySubreddits(props)}
    </div>
    )
}
