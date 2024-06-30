import React from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar/navbar';
// import BookList from './components/Books/BookList';
import Data from './components/navbar/Data';
import Form from './components/Form/Form';
import UseEffect from './components/UseEffect/UseEffect';
// import Fetch from './components/Fetch/Fetch';
import MultipleReturn from './components/Fetch/MultipleReturn';
import Memo from './components/Memo/Memo';
import UseMemo from './components/Memo/UseMemo';
import Context from './components/ContextAPI/Context';
import UseReduce from './components/Usereducer/UseReduce';
import UseRef from './components/UseRef/UseRef';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseRef/>
    <UseReduce/>
    <Context/>
    <Memo/>
    <UseMemo/>
    <MultipleReturn/>
    {/* <Fetch/> */}
    <UseEffect/>
    <Form/>
    <Navbar/>
    <Data/>
    {/* <BookList/> */}
  </React.StrictMode>
);


