function Input(props) {
    const {type, placeholder, value} = props
    return(
        <input type={type} placeholder = {placeholder} value={value}>
        </input>
    )
}

export default Input