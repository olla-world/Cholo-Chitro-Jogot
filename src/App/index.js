import Router from './components/Router';
import routes from './routes';

function App() {
    return (
        <div className="App">
            <Router routes={routes} />
        </div>
    );
}
  
export default App;
  