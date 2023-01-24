import '../../style/global.css'
import {Card} from '../../components/Card'

export function Home() {
  return (
    <div class="flex flex-col gap-2 p-4">
      <a class="font-bold text-2xl bg-black text-white flex justify-center pt-2 w-10 h-10 fixed right-4 rounded-[100%]" href="#titulo">
        ^
      </a>
      <header class="flex flex-col p-4 gap-2">
          <h1 class="font-sans text-2xl text-center" id='titulo'>Lista de Presença</h1>
          <input class="m-auto w-[50vw] h-8 pl-1 ring-2 ring-slate-100 bg-slate-100 focus:ring-fuchsia-300 outline-none" type="text" placeholder='Digite o nome...'/>
          <button class="m-auto w-[50vw] ring-2 ring-fuchsia-600 h-8 bg-fuchsia-600 text-white font-bold hover:ring-fuchsia-500 hover:bg-fuchsia-500" type='button'>Adicionar</button>
      </header>
      <hr />
      <main class='flex flex-col gap-4'>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </main>
    </div>
  )
}
