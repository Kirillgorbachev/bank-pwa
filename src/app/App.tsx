import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { AppRouter } from './providers/router';
import store from './store';

import './styles/index.scss';

import { ToastProvider } from '@/app/providers/toastProvider/ui/ToastProvider';

const persistore = persistStore(store);

function App() {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/sw.js')
                .then((registration) => {
                    console.log('Service Worker зарегистрирован:', registration);
                })
                .catch((error) => {
                    console.log('Ошибка при регистрации Service Worker:', error);
                });
        }
    }, []);

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistore}>
                <BrowserRouter>
                    <AppRouter />
                    <ToastProvider />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;
