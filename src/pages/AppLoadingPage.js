import newLogo from '../assets/logo.png';
import spinner from '../assets/spinner.png';

function AppLoadingPage(props) {
    return (
        <div className="loadingDiv">
            <img src={newLogo} alt="Errand Logo" style={{filter: 'invert()'}}/>
            <h2>Loading...</h2>
            <img src={spinner} className="App-logo" style={{filter: 'invert()'}} />
            <p>&copy; App Design by Joshua Fieldhouse</p>
        </div>
    )
};

export default AppLoadingPage;