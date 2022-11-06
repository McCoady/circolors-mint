import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import { Mint, WalletCheck } from "./routes";
import { Profile } from "./components";
import { Provider, Client, fetchExchange, dedupExchange } from 'urql'
import { cacheExchange } from '@urql/exchange-graphcache';

import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
} from 'wagmi'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  alchemyProvider({ apiKey: 'mmu_lhJrtoMQjZuImREFUV3dSlYmckn3' }),
  publicProvider(),
])

const cache = cacheExchange({});

// Set up client
const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
})

const serverClient = new Client({
  url: 'http://localhost:4000',
  exchanges: [dedupExchange, cache, fetchExchange]
})


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <Provider value={serverClient}>


    <WagmiConfig client={client}>
      <Profile />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/walletcheck" element={<WalletCheck />} />
        </Routes>
      </BrowserRouter>
    </WagmiConfig>
  </Provider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
