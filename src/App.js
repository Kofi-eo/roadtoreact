import logo from "./logo.svg";
import "./App.css";
import React from "react";

const welcome = {
  greeting: "Hey",
  title: "React",
};

function getTitle(x) {
  return x + "is here!";
}

function App() {
  {
    /* App - root component/parent component */
  }

  const [SearchT, setSearchT] = React.useState(
    localStorage.getItem("search") || "Kofi"
  );

  React.useEffect(() => {
    localStorage.setItem("search", SearchT);
  }, [SearchT]);

  const handleChange = (event) => {
    setSearchT(event.target.value);
  };

  const stories = [
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

  const filterSearch = stories.filter((story) => {
    return story.title.toLowerCase().includes(SearchT.toLowerCase());
  });

  return (
    <div>
      <Search onSearch={handleChange} searchText={SearchT} />{" "}
      {/*Child component/ leaf component */}
      <List list={filterSearch} /> {/*Child component/ leaf component */}
      <hr />
    </div>
  );
}

function Search({ searchText, onSearch }) {
  const add = (x) => {
    x = Number + 1;
    setNumber(x);
  };

  const substract = (x) => {
    x = Number - 1;
    setNumber(x);
  };

  const [Number, setNumber] = React.useState(1);
  {
    /*use state*/
  }

  return (
    <>
      <h1>
        {welcome.greeting} World! {getTitle(welcome.title)}
      </h1>
      <label htmlFor="search">Search: {searchText} </label>
      <br />

      <input
        style={{ borderColor: "red" }}
        id="search"
        type="text"
        value={searchText}
        onChange={onSearch}
      />
      <hr />
      <br />
      <h1>{Number}</h1>
      <br />

      <button onClick={add}>Increase Number</button>
      <button onClick={substract}>Decrease Number</button>
      <hr />
    </>
  );
}

function List({ list }) {
  return (
    <ul>
      {list.map((x) => (
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
      ))}
    </ul>
  );
}

export default App;
