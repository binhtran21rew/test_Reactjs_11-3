import React, { useState } from "react";

import "./dropDown.scss";

function DropDown({ ...props }) {
    const { faqItems, extraFaqs } = props;
    const [visibleExtras, setVisibleExtras] = useState(0);

    const loadMoreFaqs = () => {
        setVisibleExtras((prev) => Math.min(prev + 2, extraFaqs.length));
      };
    return (
        <div className="Dropdown container mt-5">

        <div className="accordion" id="faqAccordion">
          {faqItems.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {faq.title}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.more}</div>
              </div>
            </div>
          ))}
  
          {/* Extra FAQs - Show dynamically based on state */}
          {extraFaqs && extraFaqs.slice(0, visibleExtras).map((faq, index) => (
            <div className="accordion-item" key={index + faqItems.length}>
              <h2 className="accordion-header" id={`heading${index + faqItems.length}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index + faqItems.length}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index + faqItems.length}`}
                >
                  {faq.title}
                </button>
              </h2>
              <div
                id={`collapse${index + faqItems.length}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index + faqItems.length}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.more}</div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Load More Button */}
        <div className="text-center mt-3">
          {extraFaqs && visibleExtras < extraFaqs.length && (
            <button className="btn btn-outline-dark" onClick={loadMoreFaqs}>
              Load More
            </button>
          )}
        </div>
      </div>
    );
}

export default DropDown;
