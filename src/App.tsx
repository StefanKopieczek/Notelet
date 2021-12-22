import Score from './components/Score'

const App = () => {
  return (
    <div className="App">
      <Score
        staves={[['c4', 'd4', 'e4']]}/>
    </div>
  );
}

export default App;