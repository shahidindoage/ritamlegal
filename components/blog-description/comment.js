"use client";
import React, { useState, useEffect } from "react";
import './comment.css';
import { BASE_URL } from "@/public/data/url";

import Avatar from 'react-avatar';
// Component for handling likes and comments
const CommentAndLike = ({ blogId }) => {
    const [likesCount, setLikesCount] = useState(0);
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState("");
    const [name, setName] = useState("");
    const [isLiked, setIsLiked] = useState(false);
    const [visibleCommentsCount, setVisibleCommentsCount] = useState(2); // Set to 4 initially
    const [totalComments, setTotalComments] = useState(0); // Total number of comments
    const [isLoadMore, setIsLoadMore] = useState(true); // Track if it's load more or load less

    // Fetch likes and comments on component mount
    useEffect(() => {
        console.log("blogId:", blogId); 
        fetchLikesCount();
        fetchComments();
    }, [blogId]);

    // Fetch the like count for the current blog
    const fetchLikesCount = async () => {
        try {
            const response = await fetch(`${BASE_URL}blog/get_likes/${blogId}`);
            const data = await response.json();
            if (data.status === "success") {
                setLikesCount(data.likes);
            }
        } catch (error) {
            console.error("Error fetching likes:", error);
        }
    };

    // Fetch comments for the current blog
    const fetchComments = async () => {
        try {
            const response = await fetch(`${BASE_URL}blog/get_comments/${blogId}`);
            const data = await response.json();
            if (data.status === "success") {
                setComments(data.comments.reverse());
                setTotalComments(data.comments); // Set total number of comments
            }
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };

   // Post a like for the current blog
const handleLike = async () => {
    try {
        const response = await fetch(`/api/likes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // Only the Content-Type is needed here
            },
            body: JSON.stringify({ blog_id: blogId }), // Sending only blog_id
        });

        const data = await response.json();

        if (data.status === "success") {
            setLikesCount(likesCount + 1);
            setIsLiked(true); // This can be adjusted if you want to track the "like" state
        } else {
            console.log("Failed to add like.");
        }
    } catch (error) {
        console.error("Error posting like:", error);
    }
};

    

    

    // Post a comment for the current blog
    const handleCommentSubmit = async () => {
        if (!commentText) {
            alert("Please write a comment.");
            return;
        }

        try {
            const response = await fetch(`/api/comment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    blog_id: blogId,
                    name: name,
                    comment_text: commentText,
                }),
            });
            const data = await response.json();
            if (data.status === "success") {
                setComments([...comments, { name, comment_text: commentText }]);
                setCommentText("");
                setName("")
            } else {
                alert("You have already added a comment");
            }
        } catch (error) {
            console.error("Error posting comment:", error);
        }
    };

    // Toggle Load More and Load Less functionality
    const handleLoadMore = () => {
        if (isLoadMore) {
            setVisibleCommentsCount(visibleCommentsCount + 3); // Show 4 more comments
        } else {
            setVisibleCommentsCount(2); // Show only 4 comments
        }
        setIsLoadMore(!isLoadMore); // Toggle the flag
    };
    return (
        <div className="blog-comment-like-container">
            {/* Like Section */}
            <div className="like-section">
                <button
                    className="like-button"
                    onClick={handleLike}
                    disabled={isLiked}
                >
                    {isLiked ? <i className="fa-solid fa-thumbs-up"></i> : <i className="fa-regular fa-thumbs-up"></i>}
                </button>
                <span className="like-count">{likesCount} Likes</span>
            </div>

            <div className="comment-section">
                {/* Left Side - Comment Form */}
                <div className="comment-form-container">
                    <h3>Leave a Comment</h3>
                    <input
                        type="text"
                        className="comment-name"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <textarea
                        className="comment-text"
                        placeholder="Add a comment..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                    />
                    <button className="submit-comment" onClick={handleCommentSubmit}>
                        Submit Comment
                    </button>
                </div>

                {/* Right Side - Comments List */}
                <div className="comments-list-container">
                   {comments.length>0 &&<h3>Comments</h3>} 
                    <div className="comments-list">
                        {comments.slice(0, visibleCommentsCount).map((comment, index) => (
                            <div key={index} className="comment-item">
                                <div className="comment-list-name">
                                <Avatar name={comment.name} size="40" round={true}/>
                                <p>{comment.name}</p></div>
                                <div className="comment-list-text">
                                    
                                <p>{comment.comment_text}</p></div>
                                {/* <hr /> */}
                            </div>
                        ))}
                    </div>

                    {comments.length > 2 && (
    <button
        className="load-more"
        onClick={handleLoadMore}
        disabled={visibleCommentsCount === totalComments && isLoadMore} // Disable when all comments are visible and in "Load More" mode
    >
        {isLoadMore
            ? totalComments - visibleCommentsCount > 0
                ? `Load (${totalComments - visibleCommentsCount} more)`
                : "No more comments" // No more comments to load
            : "Load Less"}
    </button>
)}



                </div>
            </div>
        </div>
    );
};

export default CommentAndLike;
