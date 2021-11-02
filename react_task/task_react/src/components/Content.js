import Alert from "./ContentComponent/Alert"
import Button from "./ContentComponent/Button"
import Card from "./ContentComponent/Card"
import Breadcrumb from './ContentComponent/Breadcrumb'
import {menu} from '../App'

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
      const breadItems = menu.map((items) => <li><a href={items.link}>{items.title}</a></li>)
      return (
          <div>
              <Alert style={style}>
                  Это светлое уведомление — check it out!
              </Alert>
  
              <Button type='submit' style={human}>Submit</Button>
              <Button type='link' style={human}>Link<a href='#'></a></Button>
  
              <Card>
                  <img src="https://i.pinimg.com/564x/ef/84/33/ef8433606891928ab88136a23ade1553.jpg" alt="..."/>
                  <div>
                      <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  </div>
              </Card>
  
              <Breadcrumb>
                  {breadItems}
              </Breadcrumb>
          </div> 
      )
  }

export default Content