import React from "react";
import styled from "styled-components";
import H1 from "@app/skoleni.io/components/H1";

const Courses = styled.div`
  margin: 0;
`;

const Lecturer = styled.span`
  font-size: 1.5em;
`;

const CourseBar = props => (
  <>
    <Courses>
      {props.courses.map((course, i) => (
        <div key={i}>
          <a href={`skoleni/${course[1]}`}>
            <H1>{course[0]} </H1>
          </a>

          <Lecturer>
            by <a href={`lektor/${course[3]}`}>{course[2]}</a>
          </Lecturer>
        </div>
      ))}
    </Courses>
  </>
);
export default CourseBar;
