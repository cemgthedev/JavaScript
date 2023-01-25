import React, { useState } from 'react';

import '../../style/global.css'
import {Card} from '../../components/Card'

export function Home() {
  const [personName, setPersonName] = useState('');
  const [persons, setPersons] = useState([]);

  function handleAddPerson() {
    const newPerson = {
      name: personName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }
    
    setPersons(prevState => [...prevState, newPerson]); // ...prevState propaga os elementos do estado anterior dentro do novo array
    // ... se chama spread operator é responsável por propagar os elementos do array
  }

  return (
    <div class="flex flex-col gap-4 p-4" id="top">
      <a class="font-bold text-2xl bg-black text-white flex justify-center pt-2 w-10 h-10 fixed right-4 rounded-[100%]" href="#top">
        ^
      </a>
      <header class="flex flex-col p-4 gap-3 mb-0">
        <h1 class="font-sans text-2xl text-center">Lista de Presença</h1>
        <h2 class="font-sans w-fit h-8 m-auto text-2xl text-center border-b-violet-700 border-b-2">{personName}</h2>
        <input
          class="m-auto w-[50vw] rounded-md h-10 pl-1 ring-1 ring-slate-100 bg-slate-100 focus:ring-black outline-none"
          type="text"
          placeholder='Digite o nome...'
          onChange={e => setPersonName(e.target.value)}
        />
        <button
          class="m-auto w-[50vw] rounded-md ring-1 ring-fuchsia-600 h-10 bg-fuchsia-600 text-white font-bold hover:ring-fuchsia-500 hover:bg-fuchsia-500"
          type='button'
          onClick={handleAddPerson}
        >
          Adicionar
        </button>
      </header>
      <hr/>
      <main class='flex flex-col gap-4'>
        {
          persons.map(person => 
            <Card name={ person.name } time={ person.time }/>
          )
        }
      </main>
    </div>
  )
}
