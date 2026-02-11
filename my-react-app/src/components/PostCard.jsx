function PostCard({title, body}) { 
    return (
        <div className="vehicle-card">
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
}

export default PostCard;