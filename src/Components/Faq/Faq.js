import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import "./faq.css";
import faqs from "../../utils/faqConstants";

export default function Faq() {
  return (
    <div className="faq_container">
      {faqs.map((faq) => (
        <div className="faq">
          <h3 className="faq_heading">{faq.heading}</h3>
          <Accordion allowToggle>
            {faq.questionAnswer.map((QA) => (
              <AccordionItem className="accordian-item">
                <h2>
                  <AccordionButton className="accordian-question">
                    {QA.question[0].toUpperCase() + QA.question.substring(1)} ?
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel className="accordian-answer" pb={4}>
                  {QA.answer}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      ))}
    </div>
  );
}
