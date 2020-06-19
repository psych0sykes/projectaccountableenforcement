import Section from "../components/Section";
import ProjectTitle from "../components/ProjectTitle";
import Scorecard from "../components/Scorecard";

export default function Home() {
  return (
    <div>
      <Section direction="column" align="center">
        <ProjectTitle/>
        <div style={{marginTop: "25px",fontSize: "22px"}}>part 1:</div>
        <ul>
          <li style={{width: "200px",marginTop: "15px",fontSize:"10pt"}}>
            identifying racism and the biased use of force on Black Citizens by American law enforcement
          </li>
        </ul>
        <div style={{width: "25vw",height: "1px",backgroundColor: "white",marginTop: "25px"}}/>
      </Section>
      <Section>
        <div style={{marginTop: "20px"}}>
          in 2015:
        </div>
      </Section>
      <Section>
        <Scorecard score="40%" caption="traffic stops were unjustified"/>
        <Scorecard score="104" caption="unarmed black people killed by police"/>
        <Scorecard score="60%" caption="use of force incidents were excessive"/>
      </Section>
    </div>
  )
};
