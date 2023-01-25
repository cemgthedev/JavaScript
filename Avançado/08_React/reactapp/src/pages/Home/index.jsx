import React, { useState, useEffect } from 'react';

import '../../style/global.css'
import {Card} from '../../components/Card'

export function Home() {
  const [id, setId] = useState(0);
  const [personName, setPersonName] = useState('');
  const [persons, setPersons] = useState([]);

  function handleAddPerson() {
    const newPerson = {
      id: id,
      name: personName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }
    
    setId(prevState => prevState + 1);
    setPersons(prevState => [...prevState, newPerson]); // ...prevState propaga os elementos do estado anterior dentro do novo array
    // ... se chama spread operator é responsável por propagar os elementos do array
  }
  
  /*
  * Executa sempre que a interface for renderizada ou houver alteração de algum estado
  * do array de dependências.
  * Obs: sempre executa uma vez (no carregamento da página)
  */
  useEffect(() => {
      console.log('useEffect foi chamado');
  }, [persons]);

  return (
    <div className="flex flex-col gap-4 p-4" id="top">
      <a className="font-bold text-2xl bg-black text-white flex justify-center pt-2 w-10 h-10 fixed right-4 rounded-[100%]" href="#top">
        ^
      </a>
      <header className="flex flex-col p-4 gap-2 mb-0 items-center">
        <div className="flex items-center justify-between w-[50vw] p-2 rounded-md ring-2 ring-violet-700">
          <h1 className="font-sans text-3xl text-center">Estudo de React</h1>
          <div className="flex gap-2 items-center">
          <h1 className="font-sans text-lg text-center">Carlos Eduardo de Moura Gomes</h1>
          <img className="w-16 h-16 rounded-[100%]" src="https://github.com/cemgthedev.png" alt="" />
          </div>
        </div>
        <h2 className="font-sans w-fit h-8 text-2xl text-center border-b-violet-700 border-b-2">{personName}</h2>
        <input
          className="w-[50vw] rounded-md h-10 pl-1 ring-1 ring-slate-100 bg-slate-100 focus:ring-black outline-none"
          type="text"
          placeholder='Digite o nome...'
          onChange={e => setPersonName(e.target.value)}
        />
        <button
          className="w-[50vw] rounded-md ring-1 ring-fuchsia-600 h-10 bg-fuchsia-600 text-white font-bold hover:ring-fuchsia-500 hover:bg-fuchsia-500"
          type='button'
          onClick={handleAddPerson}
        >
          Adicionar
        </button>
      </header>
      <hr/>
      <main className='flex flex-col gap-4'>
        <h1 className="font-sans text-2xl text-center">Lista de Presença</h1>
        {
          persons.map(person => 
            <Card
              key={ person.id }
              name={ person.name }
              time={ person.time }
            />
          )
        }
      </main>
    </div>
  )
}
