import { useState } from "react";
import Section from "./Section";

export default function Scorecard(props){

    const [open,setOpen] = useState(false);

    const style={
        margin: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    const StatTable = ()=>{

        const TableMap = ()=>{
            return(
            props.table.map((row,index) => {
                if(index===0){
                    return(<tr key={index}>
                        {row.map((data,index) => {
                            return(<th key={index}>
                                {data}
                            </th>)
                        })}
                    </tr>)}
                else{
                    return(<tr key={index}>
                        {row.map((data,index) => {
                            return(<td key={index}>
                                {data}
                            </td>)
                        })}
                    </tr>)
                }
                
            }))
        };

        if(props.table){
            return(
                <Section direction={"column"}>
                    <div style={{marginTop: "25px"}}>
                        {props.title}
                    </div>
                    <table>
                        <tbody>
                            <TableMap/>
                        </tbody>
                    </table>
                </Section>
            )
        }else{
            return(
                <div></div>
            )
        }
    }

    const Expand = ()=>{
        if(open){
            return (
                <StatTable/>
            )
        }
        else {
            return <div></div>
        }
    };

    return(
        <div onClick={()=>setOpen(!open)}>
            <div style={style}>
                <div style={{fontSize: "16px",marginRight: "5px",width: "150px",}}>
                    {props.caption}
                </div>
                <div style={{fontSize: "25px",textAlign: "center",width: "50px"}}>
                    {props.score}
                </div>
            </div>
            <Expand></Expand>
        </div>
    );
};