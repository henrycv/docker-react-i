import React from "react";
import ApprovalCard from "../ApprovalCard/ApprovalCard";

const CommentDetail = ({ user }) => {
  return (
    <ApprovalCard>
      <div className="comment">
        <a href="/" className="avatar">
          <img src={user.avatar} alt="avatar" />
        </a>
        <div className="content">
          <a href="/" className="author">
            {user.name}
          </a>
          <div className="metadata">
            <span className="date">At {user.createdAt}</span>
          </div>
          <div className="text">Nice Blog post</div>
        </div>
      </div>
    </ApprovalCard>
  );
};

export default CommentDetail;
