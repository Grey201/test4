import Toggle from "./toggle";

function App() {
  return (
    <form className="form">
      <Toggle>Включи меня</Toggle>
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);