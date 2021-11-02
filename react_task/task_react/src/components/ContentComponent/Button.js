function Button(props) {
    return (
        <div>
            <button role="alert" style={props.style} type={props.type}>
                {props.children}
            </button>
        </div>
    )
}

export default Button