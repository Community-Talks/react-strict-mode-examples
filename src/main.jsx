import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import "./index.css";
import { router } from './router/Router.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
