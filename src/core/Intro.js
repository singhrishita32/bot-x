import React from "react";
import img1 from './img1.png'

const Intro= () => (
    <div class="row align-items-md-stretch" style={{maxWidth:"100%"}}>
        <div className="col-md-6">
            <div className="h-100 w-100 p-5 text-black">
                <h1 style={{ fontWeight: "bold", color: "orange" ,width:"100%" }}>
                    <br />
                    GENERAL
                    <br />
                    EDUCATION
                    <br />
                    PLATFORM
                </h1>
                <p>
                    The General Education Program is founded on the recognition that students will live
                    and work in a changing, often unpredictable world. Given the variability of careers
                    and employment, together with the various unforeseen directions that personal
                    development may take, General Education is dedicated to students' need for both the
                    necessary capacities for life-long learning and a knowledge base that is transferable
                    across academic disciplines and vocational contexts. Thus, general education provides
                    students with the opportunity to enhance their ability to think critically, develop
                    their communication and mathematical skills, stimulate their capacities for creative,
                    innovative thinking, and enrich their knowledge of the wider social, cultural, and
                    natural worlds in which they will have to live and work.
                    <br/>
                    <br/>
                    <button
                        className="btn btn btn-lg"
                        style={{ backgroundColor: "orange", color: "White" }}>
                        Get Started
                    </button>
                </p>
            </div>
        </div>

        <div>
            <img style={{ maxWidth: "100%", marginTop: "20%" }} src={img1} alt="General Education"/>
        </div>
    </div>
);
export default Intro;