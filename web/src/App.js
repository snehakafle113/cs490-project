import { AuthProvider } from '@redwoodjs/auth'
import { initializeApp, getApp, getApps } from 'firebase/app'
import * as firebaseAuth from '@firebase/auth'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
//import * as theme from 'config/chakra.config'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'
import theme from './theme.js'

const extendedTheme = extendTheme(theme)

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,

  /** Optional config, may be needed, depending on how you use firebase
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  **/
}

const firebaseApp = ((config) => {
  const apps = getApps()
  if (!apps.length) {
    initializeApp(config)
  }
  return getApp()
})(firebaseConfig)

export const firebaseClient = {
  firebaseAuth,
  firebaseApp, // optional
}

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <AuthProvider client={firebaseClient} type="firebase">
        <ColorModeScript />
        <ChakraProvider theme={theme}>
          <RedwoodApolloProvider>
            <Routes />
          </RedwoodApolloProvider>
        </ChakraProvider>
      </AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
