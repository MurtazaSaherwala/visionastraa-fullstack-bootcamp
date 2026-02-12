import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
            setPosts(data);
        })
    }, []);
    return (
        <>
        <h1>Posts Page</h1>
        {posts.map((post) => (
            <PostCard
                key = {post.id}
                title = {post.title}
                body = {post.body}
            />
            ))}
        </>);
}   

export default Posts;