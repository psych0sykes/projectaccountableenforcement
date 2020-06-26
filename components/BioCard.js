import Section from "./Section";

export default function BioCard(props) {

    const frameStyle = {
        height: props.frameSize ? props.frameSize : "150px",
        width: props.frameSize ? props.frameSize : "150px",
        borderRadius: props.frameSize ? props.frameSize : "150px",
        overflow: "hidden",
        marginBottom: "15px",
    };
    const imageStyle = {
        width: props.imageSize ? props.imageSize : "300px",
        position: "relative",
        right: props.offset ? props.offset : "75px",
    };
    const captionStyle = {
        width: props.captionSize ? props.captionSize : "222px",
        textAlign: "center",
    }


    return(
        <div style={{margin: "15px"}}>
            <Section direction="column">
                <div style={frameStyle}>
                    <img src={props.img} style={imageStyle}/>
                </div>
                <div style={captionStyle}>
                    {props.children}
                </div>
            </Section>
        </div>
    )
}