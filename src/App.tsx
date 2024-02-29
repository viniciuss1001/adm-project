import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { DefaultTheme } from "./theme/default/Default"
import { GlobalStyle } from "./theme/Global"
import { ApllicationRoutes } from "./Routes/Routes"



function App() {

  return (
    <BrowserRouter>
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />
      <ApllicationRoutes />
    </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
