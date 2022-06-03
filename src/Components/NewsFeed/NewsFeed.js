 import React from "react";
 import "./NewsFeed.css";

 export default function Post(props) {
     
    const displayPost = (props) => {
        const {posts} = props;

        if (posts.length > 0 ) {
            return posts.map((post, index) => {
                console.log(post);
                return (
                    <h1 className= "postTitle" key={index}>{post}</h1>
                );
            });
        }else {
            return <h3>Loading...</h3>
        }
    };
    return (
        <div className="post">
        {displayPosts(prop)}
        </div>
    )
 };