// Hooks
import { useEffect } from "react";
import { useState } from "react";

// CSS
import "./App.css";

// Components
import Cards from "./components/Cards/Cards";

function App() {
  const [money, setMoney] = useState(0);
  const [alert, setAlert] = useState("");

  useEffect(() => {
    let localMoney = JSON.parse(localStorage.getItem("money"));
    if (localMoney) {
      setMoney(localMoney);
    }
  }, []);

  const addMoney = (valueAdd) => {
    if (valueAdd) {
      const some = JSON.stringify(money + valueAdd);
      localStorage.setItem("money", some);
      setMoney(JSON.parse(some));
    } else {
      return "Adicionar CD";
    }
  };

  const removeMoney = (valueRemove) => {
    if (valueRemove) {
      if (valueRemove <= money) {
        const some = JSON.stringify(money - valueRemove);
        localStorage.setItem("money", some);
        setMoney(JSON.parse(some));
      } else {
        setAlert("CD insuficiente");
        setTimeout(() => {
          setAlert("");
        }, 5000);
      }
    } else {
      return "Gastar CD";
    }
  };

  return (
    <div className="App">
      <header>
      {alert !== "" && <span className="alert">{alert}</span>}
        <div>
          <span>CD: {money}</span>
        </div>
      </header>
      <main>
        <h2>Conseguir CD</h2>
        <div className="buy_money">
          <Cards
            title={"Verificar CriptoMoedas"}
            money={1}
            action={addMoney}
          />
          <Cards
            title={"Assistir aula de 10 min e aprender algo novo"}
            money={2}
            action={addMoney}
          />
          <Cards
            title={"Praticar por 30 minutos conteúdo aprendido"}
            money={2}
            action={addMoney}
          />
          <Cards
            title={"Treinar"}
            money={6}
            action={addMoney}
          />
        </div>
        <h2>Gastar CD</h2>
        <div className="sell_money">
          <Cards title={"Assistir netflix"} money={6} action={removeMoney} />
          <Cards title={"Navegar em besteiras"} money={1} action={removeMoney} />
          <Cards title={"Ver Reels"} money={3} action={removeMoney} />
          <Cards title={"Comprar Besteira"} money={6} action={removeMoney} />
          <Cards title={"Jogar Sinuca"} money={4} action={removeMoney} />
        </div>
      </main>
      <footer>
        <a href="https://www.dian.ga">Desenvovido por Dian Novais</a>
      </footer>
    </div>
  );
}

export default App;
