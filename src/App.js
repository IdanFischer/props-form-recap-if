import Greeting from './components/Greeting';
import NameTag from './components/NameTag';
import './App.css';
import UserForm from './components/UserForm';

const personobj = {
  firstName: "Gisselle",
  lastName: "Pombar",
  email: "idanfischer@gmail.com",
  favColor: "red",
  date: "2023/02/07"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Greeting />
      <NameTag 
      firstName="Idan"
      lastName="Fischer"
      email="idanfischer@gmail.com"
      favColor="purple"
      date="2023/02/06"
      />
      <NameTag
    firstName= "Gisselle"
    lastName= "Pombar"
    email= "idanfischer@gmail.com"
    favColor= "red"
    date= "2023/02/07"
      />
      <UserForm />
      </header>
    </div>
  );
}

export default App;
