import { createRoot } from 'react-dom/client'
import './index.css'
import axios from 'axios'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router';

axios.defaults.withCredentials=true;
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
