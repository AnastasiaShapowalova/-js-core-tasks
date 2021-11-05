function Alert(props) {
    const {children, style} = props
    return (
        <div>
            <div role="alert" style={style}>
                {children}
            </div>
        </div>
    )
}

export default Alert