import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>

      <h2> how react works?</h2>
      <p>React is a JavaScript library that uses declarative code to design user interfaces in a logical and efficient manner. It can be used to assist in the development of single-page applications, mobile apps, and complicated apps.
        React is a declarative programming language. Imagine the following code written as an app to demonstrate what we mean by declarative code.</p>


      <h2>
        what is the difference between props and state ?
      </h2>
      <p>
        The state is a fully editable structure that can vary over time and is used to store data or information about the component. A state change can occur as a result of a user action or a system event.
        Props are components that can only be read. It's an object that stores the value of a tag's attributes and functions similarly to HTML attributes. It allows data to be passed from one part to another.
      </p>




    </div>
  );
}

export default App;
