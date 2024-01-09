import buttons from "./Buttons";

export default function App() {
  return (
    <div>
      <h1>Events</h1>
      <button onClick={() => buttons("Yes!")}>Click me for YES!!!</button>
      <button onClick={() => buttons("No!")}>Click me for NO!!!</button>
    </div>
  );
}