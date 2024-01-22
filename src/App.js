import Card from "./Components/Card";
import Drawer from "./Components/Drawer";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Drawer />
      <Header />
      <div className="content">

        <div className="contentHead">
          <h1>All sneakers</h1>
          <div className="contentHead__search">
            <img height={14} width={14} src="/img/search.svg" alt="Search" />
            <input className="contentHead__search_input" type='text' placeholder="Search..."></input>
          </div>
        </div> 

        <div className="cards">
          <Card />
        </div>

      </div>
    </div>
  );
}

export default App;
