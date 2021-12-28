import {useState, useEffect} from 'react';
import store from './store';
import * as actions from './actionTypes';
import NameCard from './components/NameCard'
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [people, setPeople] = useState(store.getState());
  const [email, setEmail] = useState('');

  const unsubscribe = store.subscribe(() => {
    console.log('store changed', store.getState())
  })

  const addPerson = async () => {
    await store.dispatch({
      type: actions.PERSON_ADDED,
        payload: {
          name: name,
          email: email
        }
      })
      setPeople(store.getState())
      console.log("app state", people)
  }

  const removePerson = async (_id) => {
    await store.dispatch({
      type: actions.PERSON_REMOVED,
        payload: {
          id: _id,
        }
    })
    setPeople(store.getState())
  }

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "email" ) {
      setEmail(e.target.value);
    }
  }

  useEffect(() => {
    unsubscribe()
    setPeople(store.getState())
  }, [removePerson, setPeople]);

  return (
    <div className="App">
      <h1>Contacts</h1>
      <input className='inputs' label='name' type="text" placeholder='name' value={name} name="name" onChange={handleChange}/> <br />
      <input className='inputs' label='email' placeholder='email' type="email" onChange={handleChange} name="email" value={email} />
      <button className='btn' onClick={addPerson}>Add</button>
      <h2 style={{textAlign: 'center'}}>People: </h2>
        {people.map(person => {
            return <NameCard key={person.id} id={person.id} name={person.name} email={person.email} remove={removePerson}/>
        })}
    </div>
  );
}

export default App;
