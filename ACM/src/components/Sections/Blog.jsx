import React from "react";
import styled from "styled-components";
// Components
import BlogBox from "../Elements/BlogBox";
//import FullButton from "../Buttons/FullButton";
//import TestimonialSlider from "../Elements/TestimonialSlider";

export default function Blog() {
  return (
    <Wrapper id="blog" className="darkBg">
      <div className="darkBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold"  style={{ paddingTop: "60px" }}>Events</h1>
            {/*<p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
  </p>*/}
          </HeaderInfo>
         {/*} <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Celestia"
                text="Annual inter-collegiate quiz competition with prizes worth rupees 1.5K for first placce and 1K for runner's up"
                tag="29th June 2022"
                //author="Luke Skywalker, 2 days ago"
               // action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Name of Event"
                text="Detail Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="Date"
               // author="Luke Skywalker, 2 days ago"
                //action={() => alert("clicked")}
              />
            </div>
          </div>
          */}
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Celestia"
                text="Annual inter-collegiate quiz competition with prizes worth rupees 1.5K for first placce and 1K for second place"
                tag="29th June 2022"
                //author="Luke Skywalker, 2 days ago"
                //action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Renascence 2022"
                text="Two day Tech-fun event for first year students including workshops on GitHub, Git and Linux basics along with TechZap, a rapid fire quiz competition"
                tag="5th - 6th February 2022"
              //  author="Luke Skywalker, 2 days ago"
               // action={() => alert("clicked")}
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <BlogBox
                title="Hour of Code"
                text="Workshp on basics of Python for students of Christava Mahilalayam Public School, Aluva conducted by ACM memmbers"
                tag="16th December 2021"
               // author="Luke Skywalker, 2 days ago"
               // action={() => alert("clicked")}
              />
            </div>
          </div>
          {/*<div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
</div>*/}
        </div>
      </div>
      {/*<div className="lightBg" style={{padding: '50px 0'}}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">What They Say?</h1>
            <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <TestimonialSlider />
        </div>
      </div>
*/}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;