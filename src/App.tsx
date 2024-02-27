import { BrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home"
import { ThemeProvider } from "styled-components"
import { DefaultTheme } from "./theme/default/Default"
import { GlobalStyle } from "./theme/Global"



function App() {

  return (
    <BrowserRouter>
    <ThemeProvider theme={DefaultTheme}>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
