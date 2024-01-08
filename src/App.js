//  import styled from "styled-components";
import Card from "./components/Card";
import Loading from "./components/Loading";
import Products from "./components/Products";
function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <Card />
      <Loading />
      <Products/>
    </div>
  );
}

export default App;
