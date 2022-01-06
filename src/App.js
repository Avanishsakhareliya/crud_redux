import './App.css';
import Form from "../src/componet/Form"
import { store, persistor } from './Store';
import { Provider } from "react-redux"
import { Routes, Route } from "react-router-dom"
import Update from './componet/Update';
import Table from './componet/Table';
import { PersistGate } from 'redux-persist/integration/react'

function App() {

  return (
    <>

      <Provider store={store}>
        <PersistGate persistor={persistor} >
          <Routes>
            <Route path="/" element={<Form />} exact />
            <Route path="/update/:id" element={<Update />} exact />
            <Route path="/table" element={<Table />} exact />
          </Routes>
        </PersistGate>
      </Provider>


    </>
  );
}

export default App;
