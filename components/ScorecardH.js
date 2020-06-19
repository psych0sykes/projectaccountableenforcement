export default function Scorecard(props){

    const style={
        margin: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }

    return(
        <div style={style}>
            <div style={{fontSize: "16px",marginRight: "5px",width: "150px",}}>
                {props.caption}
            </div>
            <div style={{fontSize: "25px",textAlign: "center"}}>
                {props.score}
            </div>
        </div>
    )
}