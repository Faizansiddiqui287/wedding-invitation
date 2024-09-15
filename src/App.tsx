import './App.css';
import LandingScreen from './components/LandingScreen';

const styles = {
  body: {
    fontFamily: "Caveat, cursive",
    margin: 0,
    padding: 0,
    width: "100 %",
    height: "100 %",
  },
};

function App() {
  return (
    <div style={styles.body}>
      <LandingScreen />
    </div>
  );
}

export default App;