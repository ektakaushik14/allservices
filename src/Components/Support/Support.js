import React from "react";
import Nav from "../Nav/Nav";
import "./support.css";
export default function Support() {
  return (
    <div className="support">
      <Nav black={true} />
      <div className="supportHeading">
        <div>Start the conversation</div>
        <div>For inquiries fill out the form below</div>
        <div>For general inquiries: shanumishra@gmail.com </div>
        <div>Call us anytime at: +9999999999 </div>
      </div>
      <div>
        <form>
          <div>
            <div>
              <div>
                <h4>first name</h4>
                <input type="text" />
              </div>
              <div>
                <h4>last name</h4>
                <input type="text" />
              </div>
            </div>
            <div>
              <div>
                <h4>Email</h4>
                <input type="text" />
              </div>
              <div>
                <h4>Phone Number</h4>
                <input type="text" />
              </div>
            </div>
          </div>
          <div>
            <h4>Message</h4>
            <input type="text" />
          </div>
        </form>
      </div>
    </div>
  );
}
