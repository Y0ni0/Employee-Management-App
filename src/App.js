import { ThemeProvider } from 'styled-components';
import Dashboard from './components/Dashboard';
import Grupos from './app/Grupos';
import './App.css'

const theme = {
    colors: {
        header: 'rgb(214, 214, 214)',
        body: '#fff',
        footer: '#003333'
    }

}
function App() {

    return (
        <ThemeProvider theme={theme}>
            <Dashboard />
        </ThemeProvider>
    )
}

export default App;