const CommentSection = (props) => {
    
    return (
        <div className="table-container">
            <table>
                <tbody>
                {props.comments.map((text, index) => (
                        <tr key={index}>
                            <td>{text}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default CommentSection;