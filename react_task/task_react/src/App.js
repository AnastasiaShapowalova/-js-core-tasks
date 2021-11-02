import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Content from './components/Content';

const menu = [
  {
    title: 'item1',
    link: '/item1'
  },
  {
    title: 'item2',
    link: '/item2'
  },
  {
    title: 'item3',
    link: '/item3'
  },
  {
    title: 'item4',
    link: '/item4'
  },
  {
    title: 'item5',
    link: '/item5'
  }
];

function App() {
  const menuItems = menu.map((items) => <li>{items.title}</li>)
  return (
    <div className="App">
      <Header></Header>
      <Nav>
        {menuItems}
      </Nav>
      <Content>
      </Content>
      <Footer>2021</Footer>
    </div>
  );
}

export default App;
