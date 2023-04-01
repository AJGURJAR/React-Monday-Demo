import './App.css';
import ReactTabs from './ReactTabs';

function App() {
  return (
    <div className="App">
   <h1 style={{marginBottom: '20px'}}><strong>Everything</strong> you need for <strong>any workflow</strong></h1>
   <p style={{marginBottom: '20px'}}>Easy build your ideal workflow with monday.com building blocks.</p>
   <div style={{margin: '50px'}}>
      <ReactTabs />
   </div>
</div>
  );
}

export default App;
