export default function MultipleChoice (props) {
    const choiceArray = props.q.choices ? props.q.choices : [""];
    const questionText = props.q.questionText ? props.q.questionText : "";
    console.log(choiceArray);
    console.log(questionText);

    const Choices = choiceArray.map((choice) => {

        console.log(choiceArray);

        return (
            <div>
                {choice}
            </div>
        )
    });

    return (
        <div>
            <div>{questionText}</div>
            <div>
                {Choices}
            </div>
        </div>
    )
}