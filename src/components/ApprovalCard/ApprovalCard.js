import React from "react";

const ApprovalCard = ({ children }) => {
  return (
    <div className="ui card">
      <div className="content">{children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic button green">Approve</div>
          <div className="ui basic button red">Reject</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
