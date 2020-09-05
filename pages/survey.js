import Section from "../components/Section";
import ProjectTitle from "../components/ProjectTitle";
import MultipleChoice from "../components/Form/MultipleChoice";
import { useState } from "react";

export default function Home() {



  return (
    <div>
      <Section direction="column" align="center">
        <ProjectTitle/>
        <div style={{marginTop: "25px",fontSize: "22px"}}>part 2: survey</div>
        <ul>
          <li style={{width: "200px",marginTop: "15px",fontSize:"10pt"}}>
            compare your interacitons with Police with the BJS study data
          </li>
        </ul>
        <div style={{width: "25vw",height: "1px",backgroundColor: "white",marginTop: "25px"}}/>
      </Section>
      <Section>
          <MultipleChoice q={{questionText: "Please select your race:",choices: ["White","Black","Hispanic","Other"]}}/>
      </Section>
      <Section direction="column">
        <div style={{width: "25vw",height: "1px",backgroundColor: "white",marginTop: "25px",marginBottom:"25px"}}/>
      </Section>
      <footer></footer>
    </div>
  )
};