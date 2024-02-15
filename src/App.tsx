import './App.css';
import ConcluirTarefa from './paginas/concluirTarefa/ConcluirTarefa';
import Contador from './paginas/contador/Contador';
import Home from './paginas/home/Home';

function App() {
   return (
    <>
      <Home titulo='Esse é um componente com props'
      texto='Agora já estamos trabalhando com props - Componente chamado com sucesso' />

      <Home titulo='Agora estamos testando'
      texto='Esse é um texto para comprovar a teoria do props' />

      <Contador />
      <ConcluirTarefa />
    </>

  );
}

export default App;