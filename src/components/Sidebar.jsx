import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";

import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Sidebar() {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
      >
        Compose
      </Button>

      <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected />
      <SidebarOption Icon={StarIcon} title="Starred" number={14} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={14} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={14} />
      <SidebarOption Icon={NearMeIcon} title="Sent" number={14} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={14} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={14} />
    </div>
  );
}

export default Sidebar;
