function Footer(props) {
    const {children} = props
    return (
        <div>
             @copyright все права защищены {children} год.
        </div>
    )
}

export default Footer