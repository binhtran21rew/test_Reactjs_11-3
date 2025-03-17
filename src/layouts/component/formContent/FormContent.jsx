import React from "react";

import './formContent.scss';

function FormContent({ ...props }) {
    const { title, listName, listDetail } = props;
    return (
        <div className="FormContent d-flex flex-column ">
            <h1 className="FormContent_text" style={{ fontFamily: "serif" }}>
                {title}
            </h1>
            {listName.map((item, id) => {
                return (
                    <section key={id} className="FormContent_list mb-5 lh-lg">
                        <h4>{item}</h4>
                        <ul className="p-0">
                            {listDetail[id].map((data, id) => {
                                return <li key={id}>{data}</li>;
                            })}
                        </ul>
                    </section>
                );
            })}
        </div>
    );
}

export default FormContent;
