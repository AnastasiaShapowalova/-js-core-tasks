import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Content from './components/Content';
import TitleCreator from './components/TitleCreator';
import Input from './components/Input';
import Rating from './components/Rate';
import Tag from './components/Tag';
import Pagination from './components/Pagination';

export const menu = [
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
      <TitleCreator fontSize='28px' color='red'>TitleName</TitleCreator>

      <Header></Header>

      <Nav>
        {menuItems}
      </Nav>

      <Pagination countArticles='49' limit='10'/>

      <Input type='password' placeholder = 'Write...' value='value'></Input>
      <Rating maxStar='4' selectedStar='3'></Rating>
      <Tag></Tag>

      <Content>
      </Content>
      
      <Footer>2021</Footer>
    </div>
  );
}

export default App;

