import React from "react";
import "./SendMail.css";
import { useForm } from "react-hook-form";
import { closeSendMessage } from "../../slices/mailSlice";
import { useDispatch } from "react-redux";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../../firebase";

import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";

function SendMail() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    try {
      addDoc(collection(db, "emails"), {
        to: data.to,
        subject: data.subject,
        message: data.message,
        timestamp: serverTimestamp(),
      });
      dispatch(closeSendMessage());
    } catch (error) {
      console.error("error:", error);
    }
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMessage())}
          className="sendMail__close"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("to", { required: true })}
          placeholder="To"
          type="email"
        />
        {errors.to && <p className="sendMail__error">To is Required</p>}

        <input
          {...register("subject", { required: true })}
          placeholder="Subject"
          type="text"
        />
        {errors.subject && (
          <p className="sendMail__error">Subject is Required</p>
        )}

        <input
          {...register("message", { required: true })}
          className="sendMail__message"
          placeholder="Message..."
          type="text"
        />
        {errors.message && (
          <p className="sendMail__error">Message is Required</p>
        )}

        <div className="sendMail__options">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="sendMail__send"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export { SendMail };
