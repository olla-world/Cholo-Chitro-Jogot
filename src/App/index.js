import Router from './components/Router';
import NavBar from './components/NavBar';
import routes, { routePath } from './routes';

const navLinks = [
    { 
        text: 'Cholo-Chitro-Jogot', 
        href: routePath('home'), 
        type: 'brand',
    }
];

function App() {
    return (
        <div className="App">
            <Router routes={routes}>
                <NavBar links={navLinks} />
            </Router>
        </div>
    );
}
  
export default App;
  