import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Container.styled'
import Header from './components/Header';
import GlobalStyles from './components/styles/Global';
import Add from './components/Add';
import { useState } from 'react'
import List from './components/List';
import { employees } from './components/Data';
import Dashboard from './components/Dashboard';


const theme = {
    colors: {
        header: '#ebfbff',
        body: '#fff',
        footer: '#003333'
    }
}
function App() {
    //  const [employeesData, setData] = useState(employees)


    // const [isAdding, setIsAdding] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <Dashboard />
        </ThemeProvider>
    )
}

export default App;