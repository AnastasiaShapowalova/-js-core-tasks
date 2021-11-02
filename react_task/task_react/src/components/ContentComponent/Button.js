function Button(props) {
    const {type, style, children} = props
    return (
        <div>
            <button role="alert" style={style} type={type}>
                {children}
            </button>
        </div>
    )
}

export default Button