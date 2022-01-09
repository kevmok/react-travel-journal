import Navbar from './components/navbar';
import Main from './components/main';
import data from './data';

function App() {
    const travelData = data.map((item) => {
        return <Main key={item.id} {...item} />;
    });
    return (
        <div>
            <Navbar />
            {travelData}
        </div>
    );
}

export default App;
