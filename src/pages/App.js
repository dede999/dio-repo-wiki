import Navbar from "../components/Navbar/style";
import ItemRepo from "../components/ItemRepo";
import { useState } from "react";

function App() {
  const [repos, setRepos] = useState([]);

  return (
    <div className="App">
      <Navbar />
      {repos.map(({name, author}, index) => (
        <ItemRepo repoName={name} repoAuthor={author.name} key={index} />
      ))}
    </div>
  );
}

export default App;
