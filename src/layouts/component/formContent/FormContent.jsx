import React from "react";

function FormContent({ ...props }) {
    const { title, listName, listDetail } = props;
    return (
        <div className="FormContent d-flex flex-column ">
            <h1 className="mb-5" style={{ fontFamily: "serif" }}>
                {title}
            </h1>
            {listName.map((item, id) => {
                return (
                    <section key={id} className="mb-5 lh-lg">
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
