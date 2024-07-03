import React, {useEffect,useState} from "react";
import axios from "axios";


function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/popular-games')
    .then(response => {
      setGames(response.data);
    })
        .catch(error => {
          console.error('fetching error',error);
        });
  }, []);



  return (
    <div className="App">
      <h1>En populer 10 steam oyunu</h1>
      <ol>
        {games.map(game => (
            <li key={game.appid}>{game.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
