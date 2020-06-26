import Section from "../components/Section";
import ProjectTitle from "../components/ProjectTitle";
import ScorecardV from "../components/ScorecardV";
import ScorecardH from "../components/ScorecardH";
import BioCard from "../components/BioCard";

export default function Home() {
  return (
    <div>
      <Section direction="column" align="center">
        <ProjectTitle/>
        <div style={{marginTop: "25px",fontSize: "22px"}}>part 1: identify</div>
        <ul>
          <li style={{width: "200px",marginTop: "15px",fontSize:"10pt"}}>
            identify racism and the excessive use of force on Black Citizens by American law enforcement
          </li>
        </ul>
        <div style={{width: "25vw",height: "1px",backgroundColor: "white",marginTop: "25px"}}/>
      </Section>
      <Section>
        <div style={{marginTop: "30px"}}>
          in 2015:
        </div>
      </Section>
      <Section>
        <ScorecardV score="40%" caption="traffic stops were unjustified"/>
        <ScorecardV score="104" caption="unarmed black people killed by police"/>
        <ScorecardV score="60%" caption="use of force incidents were excessive"/>
      </Section>
      <Section direction="column">
        <div style={{borderRadius: "300px",height: "150px",width: "150px",overflow: "hidden",padding:"50px",backgroundColor:"white",marginTop:"30px"}}>
          <img src="/blmFist.png" style={{backgroundColor: "white",width: "150px"}}/>
        </div>
      </Section>
      <Section direction="column">
        <div style={{marginTop: "50px", width: "250px",fontSize: "22px"}}>
          A black person living in America is more likely to be...
        </div>
        <ScorecardH score="3x" caption="killed by police"/>
        <ScorecardH score="2.5x" caption="a victim of excessive force"/>
        <ScorecardH score="1.7x" caption="stopped on the street"/>
        <ScorecardH score="1.7x" caption="arrested"/>
        <ScorecardH score="1.4x" caption="pulled over"/>
      </Section>
      <Section direction="column">
        <div style={{width: "25vw",height: "1px",backgroundColor: "white",marginTop: "25px",marginBottom:"25px"}}/>
        <Section>
          <BioCard img="/breonaTaylor.jpg">
            Three officers shot and killed Breonna Taylor in her bed after breaking into her home.
          </BioCard>
          <BioCard img="/elijahMcClain.jpg" imageSize="200px" offset="25px">
            Police beat and killed 23 year old Elijah McClain as he begged for them to stop. He was unarmed.
          </BioCard>
          <BioCard img="rayshardBrooks.jpg" imageSize="150px" offset="0px">
            Rayshard Brooks was shot twice in the back by police who refused to let him sleep in his car.
          </BioCard>
        </Section>
      </Section>
    </div>
  )
};
