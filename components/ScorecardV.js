export default function Scorecard(props){

    const style={
        margin: "10px",
        width: "150px",
    }

    return(
        <div style={style}>
            <div style={{fontSize: "55px",textAlign: "center"}}>
                {props.score}
            </div>
            <div style={{fontSize: "13px"}}>
                {props.caption}
            </div>
        </div>
    )
}