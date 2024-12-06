import { useEffect, useState } from "react";

function App() {


  const [input, setInput] = useState('');

  const [users, setUsers] = useState({});

 
  useEffect(() => {

    const ArrayUsuarios = localStorage.getItem("@usuarios");

    if(ArrayUsuarios){

        setUsers(JSON.parse(ArrayUsuarios));

    }


  }, []);

  useEffect(() => {

      localStorage.setItem('@usuarios', JSON.stringify(users));

  }, [users]);


  function armazenar(e){

    e.preventDefault();

    setUsers([...users, input]);
    setInput('');

  }

  return (
    <div>
    
      <form onSubmit={ armazenar }>
        <label>Nome:</label><br/>
        <input placeholder="Digite o seu nome"
          onChange={(e) => setInput(e.target.value)}
        /><br/>
        <label>Sobrenome:</label><br/>
        <input placeholder="Digite o seu sobrenome"
          onChange={(e) => setInput(e.target.value)}
        /><br/>
      </form>

    </div>
  );
}

export default App;
