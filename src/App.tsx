import logo from './assets/images/logo.svg'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://github.com/Amir-Bagjani/react-typescript-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get this boilerplate from github
        </a>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
