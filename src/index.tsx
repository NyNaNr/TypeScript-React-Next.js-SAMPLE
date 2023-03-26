import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Name from './components/Name';
import ContainerSample from './components/ContainerSample';
import ContainerSample2 from './components/ContainerSample2';
import Hooks_useState_counter from './components/Hooks_useState_counter'
import Hooks_useReducer_counter from './components/Hooks_useReducer_counter'
import { Parent } from './components/Parent'
import { Parent2 } from './components/Parent2'
import { Parent3 } from './components/Parent3'
import { UseMemoSample } from './components/UseMemoSample';
import { Clock } from './components/Clock';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Name />
    <ContainerSample />
    <ContainerSample2 />
    <Hooks_useState_counter initialValue={0} />
    <Hooks_useReducer_counter initialValue={0} />
    <Parent />
    <Parent2 />
    <Parent3 />
    <UseMemoSample />
    <Clock />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
