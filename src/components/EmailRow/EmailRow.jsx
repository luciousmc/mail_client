import { Checkbox, IconButton } from "@material-ui/core";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { selectMail } from "../../slices/mailSlice";
import "./EmailRow.css";

function EmailRow({ id, title, subject, description, time }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(selectMail({
      id,
      title,
      subject,
      description,
      time
    }))

    history.push(`/mail`);
  }

  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>

      <h3 className="emailRow__title">{title}</h3>

      <div className="emailRow__message">
        <h4>
          {subject}{" "}
          <span className="emailRow__description">- {description}</span>
        </h4>
      </div>

      <p className="emailRow__time">{time}</p>
    </div>
  );
}

export {EmailRow};
