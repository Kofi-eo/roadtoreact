import logo from "./logo.svg";
import "./App.css";

const welcome = {
  greeting: "Hey",
  title: "React",
};

function getTitle(x) {
  return x + "is here!";
}

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  return (
    <div>
      <h1>
        {welcome.greeting} World! {getTitle(welcome.title)}
      </h1>
      <label htmlFor="search">Search: </label>
      <br />

      <input style={{ borderColor: "red" }} id="search" type="text" />
      <button>Click me</button>

      <List />

      <hr />
    </div>
  );
}

function List() {
  return (
    <ul>
      {list.map((x) => {
        return (
          <li key={x.objectID}>
            <span>
              <a href={x.url}>{x.title}</a>
            </span>
            <br />
            <span>{x.author}</span>
            <br />
            <span>{x.num_comments}</span>
            <br />
            <span>{x.points}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default App;
