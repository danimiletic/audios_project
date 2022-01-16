import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initMiddleware } from 'devise-axios';
import AuthProvider from './providers/AuthProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlatformProvider from './providers/PlatformProvider';
import ArtistProvider from './providers/ArtistProvider';
import AlbumProvider from './providers/AlbumProvider';

initMiddleware();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <PlatformProvider>
          <ArtistProvider>
            <AlbumProvider>
              <App />
            </AlbumProvider>
          </ArtistProvider>
        </PlatformProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();