export default function ProjectTitle() {

    const style = {
        margin: "0px",
    }

    return(
        <div style={{display: "flex",alignItems: "center",flexWrap: "wrap"}}>
            <div>
                <h2 style={{margin: "5px"}}>the</h2>
            </div>
            <div style={{width: "2px",height: "75px",backgroundColor: "white",marginRight: "5px"}}></div>
            <div>
                <h1 style={style}>Accountable</h1>
                <h1 style={style}>Enforcement</h1>
                <h2 style={style}>project</h2>
            </div>
            <div style={{width: "35px",height: "1px"}}>
            </div>
        </div>
    )
}