import React from "react";
function card(s) {
    return(
        <div className="card mb-4 box-shadow">
            <div  className="card-header">
                <h4 className="my-0 font-weight-normal" style={{ color: "orange",fontSize:"30px", fontWeight: "bold" }}>GRADE</h4>
            </div>
            <div className="card-body" style={{cursor:"pointer"}}>
                <h1 className="card-title pricing-card-title" style={{ color: "orange",fontSize:"50px", fontWeight: "bold" }}>{s} </h1>
            </div>
        </div>
    )
}
const ForStudents= () => (
    <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center" style={{ backgroundColor: "orange" ,maxWidth:"100%"}}>
        <h3 style={{ color: "white", fontWeight: "bold" }}>FOR STUDENTS</h3>
        <p className="lead" style={{ color: "white" }}>Some dummy text</p>
        <div className="card-deck mb-3 text-center">
            {card("3-6")}
            {card("7-10")}
            {card("11-12")}
        </div>
    </div>
);
export default ForStudents;