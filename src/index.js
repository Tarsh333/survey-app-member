import React from 'react'
import reactDom from 'react-dom'
import App from './App'
import './index.css'
import {Context} from './Context'
import 'bootstrap/dist/css/bootstrap.min.css';
reactDom.render(<Context><App/></Context>,document.getElementById('root'))