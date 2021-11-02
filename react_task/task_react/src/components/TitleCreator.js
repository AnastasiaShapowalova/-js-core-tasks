function TitleCreator(props) {
    const {fontSize, color, children} = props
    return(
        <div style={{fontSize: `${fontSize}`, color: `${color}`}}>
            {children}
        </div>
    )
}

export default TitleCreator