import Alert from "./ContentComponent/Alert"
import Button from "./ContentComponent/Button"

const style = {
    display: 'flex',
    justifyContent: 'left',
    color: 'dark',
    backgroundColor: 'lightBlue',
    width: '700px',
    innerHeight: '30px',
    borderRadius: '5px',
    padding: '15px'
  }
  const human = {
    display: 'flex',
    justifyContent: 'center',
    color: 'orange',
    backgroundColor: 'lightYellow',
    fontWeight: 'bold',
    width: '300px',
    innerHeight: '30px',
    borderRadius: '5px',
    padding: '15px'
  }

function Content() {
    return (
        <div>
            <Alert style={style}>
                Это светлое уведомление — check it out!
            </Alert>
            <Button type='submit' style={human}>Submit</Button>
            <Button type='link' style={human}>Link<a href='#'></a></Button>
        </div> 
    )
}

export default Content