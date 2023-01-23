import React from "react";
import CancelButton from "../CancelButton/CancelButton";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./support.css";
export default function Support() {
  return (
    <div className="support">
      <div className="supportHeading">
        <div>Start the conversation</div>
        <div>For inquiries fill out the form below</div>
        <div>For general inquiries: shanumishra@gmail.com </div>
      </div>
      <div className="supportSubHeading">
        <form>
          <div>
            <div>
              <div>
                <h4>first name</h4>
                <input placeholder="e.g. Jim" type="text" />
              </div>
              <div>
                <h4>last name</h4>
                <input placeholder="e.g. Potter" type="text" />
              </div>
            </div>
            <div>
              <div>
                <h4>Email</h4>
                <input placeholder="e.g. example@gmail.com" type="text" />
              </div>
              <div>
                <h4>Phone Number</h4>
                <input placeholder="e.g. 123-4567-89" type="text" />
              </div>
            </div>
          </div>
          <div className="supportMessage">
            <h4>Message</h4>
            <input placeholder="Let us know how we can help..." type="text" />
          </div>
          <div className="supportSubmitButton">
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
