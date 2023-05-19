import Country from "./components/Country";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Country cityName="Vancouver" image="https://images.unsplash.com/photo-1578973615934-8d9cdb0792b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1589&q=80" title="Canada" />
      <Country cityName="Los Angeles" image="https://images.unsplash.com/photo-1500277127996-2e6206b069ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" title="USA" />
    </div>
  );
}
