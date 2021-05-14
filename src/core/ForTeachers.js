import React from "react";
function card(s) {
    return(
        <div className="card mb-4 box-shadow">
            <div className="card-header">
                <h4 className="my-0 font-weight-normal" style={{ color: "orange", fontSize: "25px", fontWeight: "bold" }}>ASPIRING {s}</h4>
            </div>
            <div className="card-body" style={{cursor:"pointer"}}>
                <h1 className="card-title pricing-card-title" style={{ color: "orange", fontSize: "20px" }}>THIS IS FOR THOSE COLLEGE STUDENTS WHO ARE WILLING TO GO BEYOND</h1>
            </div>
        </div>
    )
}
const ForTeachers= () => (
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" style={{maxWidth:"100%"}}>
        <h3 style={{ color: "orange", fontWeight: "bold" }}>FOR EDUCATORS</h3>
        <p className="lead" style={{ color: "black" }}>Some dummy text</p>
        <div className="card-deck mb-3 text-center">
            {card("TEACHERS")}
            {card("ENTHUSIACTS")}
        </div>
    </div>
);
export default ForTeachers;