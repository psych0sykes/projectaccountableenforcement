import { useState } from "react";

export default function Scorecard(props){

    const [open,setOpen] = useState(true);

    const style={
        margin: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    };

    const StatTable = ()=>{

        const TableMap = ()=>{
            return(
            props.table.map((row) => {
                return(<tr>
                    {row.map((data) => {
                        return(<td>
                            {data}
                        </td>)
                    })}
                </tr>)})
            );
        };

        if(props.table){
            return(
                <table>
                    <tbody>
                        <TableMap/>
                    </tbody>
                </table>
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