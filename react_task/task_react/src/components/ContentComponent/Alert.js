function Alert(props) {
    return (
        <div>
            <div role="alert" style={props.style}>
                {props.children}
            </div>
        </div>
    )
}

export default Alert