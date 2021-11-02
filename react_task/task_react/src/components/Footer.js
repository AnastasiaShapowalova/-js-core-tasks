function Footer(props) {
    return (
        <div>
             @copyright все права защищены {props.children} год.
        </div>
    )
}

export default Footer