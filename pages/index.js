import Section from "../components/Section";
import ProjectTitle from "../components/ProjectTitle";

export default function Home() {
  return (
    <div>
      <Section direction="column" align="center">
        <ProjectTitle/>
        <ul>
          <li style={{width: "200px",marginTop: "15px",fontSize:"10pt"}}>
            identifying racism and the biased use of force on Black Citizens by American law enforcement
          </li>
        </ul>
        <div style={{width: "25vw",height: "1px",backgroundColor: "white",marginTop: "25px"}}/>
      </Section>
    </div>
  )
};
