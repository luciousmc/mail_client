import React, { useEffect, useState } from "react";
import "./EmailList.css";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import SettingsIcon from "@material-ui/icons/Settings";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";

function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const getMails = async () => {
      const querySnapshot = await getDocs(collection(db, "emails"));
      // querySnapshot.forEach(doc => {
      //   console.log('doc', doc.id);
      // })
      setEmails(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    };
    getMails();
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={InboxIcon} title="primary" color="red" selected />
        <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
        <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
      </div>

      <div className="emailList__list">
        {emails &&
          emails.map((mail) => (
            <EmailRow
              key={mail.id}
              title={mail.to}
              subject={mail.subject}
              description={mail.message}
              time={mail.timestamp}
            />
          ))}

        {/* <EmailRow
          title="Twitch"
          subject="Hey fellow streamer!"
          description="This is a test"
          time="10pm"
        />
        <EmailRow
          title="ETBCI"
          subject="yooo"
          description="Umm I think we need to meet about the website =)"
          time="10pm"
        />
        <EmailRow
          title="Toutube"
          subject="I think thi sis wrong"
          description="You got the wrong address man, what a bonehead. Please stop spamming me!"
          time="10pm"
        /> */}
      </div>
    </div>
  );
}

export default EmailList;
