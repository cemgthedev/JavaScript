import { useEffect, useState } from 'react'

export function App() {
  const [count, setCount] = useState(0);
  const [renderCount, setRenderCount] = useState(0);
  
  /*
  * useEffect recebe dois parâmetros: uma função callback e um array de dependências
  * Obs: o array de dependências armazena os estados que acionarão a função callback sempre que
  * forem atualizados. Outro ponto é que por padrão useEffect sempre executa uma primeira vez (renderização
  * da página)
  */
  useEffect(() => {
    setRenderCount(prevState => prevState + 1);
  }, [count]);

  /*
  * Para utilizar async/await em useEffect é necessário criar uma função assincrona e chamá-la
  */
 /*
 useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetch('https://api.github.com/users/cemgthedev');
      const data = await response.json();
      console.log(data.name);
    } catch(error) {
      console.error(error);
    }
  }

  fetchData();
 }, []);
 */

  return (
    <div>
      <h1>Básico de Hooks</h1>
      <h2>useState</h2>
      <p>useState permite a criação de estados e funções para atualizá-los</p>
      <p>Por meio de useState atualizamos a contagem toda vez que o botão é clicado...</p>
      <button onClick={() => setCount(prevState => prevState + 1)}>Contagem: {count}</button>
    
      <h2>useEffect</h2>
      <p>useEffect permite a execução de efeitos colaterais</p>
      <p>Por meio de useEffect atualizamos a contagem abaixo sempre que o estado da contagem acima é
        atualizado
      </p>
      <p>Número de chamadas a useEffect: {renderCount}</p>
    </div>
  )
}
