import { Avatar } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Suggestion = () => {
  let navigate = useNavigate();

  return (
    <div className="suggestion container my-3" style={{ padding: 0 }}>
      <div className="row">
        <div className="col-2">
          <Avatar
            sx={{ bgcolor: "orange" }}
            style={{ marginTop: 6, marginRight: 5, cursor: "pointer" }}
            className="suggestion-avatar"
            onClick={() => {
              navigate("profile");
            }}
          >
            N
          </Avatar>
        </div>
        <div className="col-9" style={{ marginLeft: 5 }}>
          <div className="row" style={{ marginLeft: 3, color: "#999999" }}>
            anh.nguyen
          </div>
          <div className="row" style={{ marginLeft: 3 }}>
            Nguyễn Việt Anh
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
