import Navbar from "../components/Navbar";
import ItemRepo from "../components/ItemRepo";
import { useState } from "react";

function App() {
  const [repos, setRepos] = useState([]);
  const handleRemove = (index) => {
    setRepos(repos.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <Navbar onChange={setRepos} />
      {repos.map(({ name, author }, index) => (
        <ItemRepo
          repoName={name}
          repoAuthor={author.name}
          key={index}
          index={index}
          removeAction={handleRemove}
        />
      ))}
    </div>
  );
}

export default App;
