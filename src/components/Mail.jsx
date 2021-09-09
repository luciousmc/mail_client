import React from "react";
import "./Mail.css";

import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ErrorIcon from "@material-ui/icons/Error";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import LabelImportant from "@material-ui/icons/LabelImportant";
import MoreVert from "@material-ui/icons/MoreVert";


function Mail() {
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton>
              <ArrowBackIcon />
            </IconButton>
            
            <IconButton>
              <MoveToInboxIcon />
            </IconButton>
            
            <IconButton>
              <ErrorIcon />
            </IconButton>

            <IconButton>
              <DeleteIcon />
            </IconButton>
            
            <IconButton>
              <EmailIcon />
            </IconButton>
            
            <IconButton>
              <WatchLaterIcon />
            </IconButton>
            
            <IconButton>
              <LabelImportant />
            </IconButton>
            
            <IconButton>
              <MoreVert />
            </IconButton>
        </div>
        
        <div className="mail__toolsright"></div>
      </div>


    </div>
  );
}

export default Mail;
