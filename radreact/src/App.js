import { BrowserRouter } from 'react-router-dom';
import AppRoute from './Routes/AppRoute';
import 'react-multi-carousel/lib/styles.css';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<AppRoute />
			</BrowserRouter>
		</div>
	);
}

export default App;
