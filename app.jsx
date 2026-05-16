function App() {
  const isMobile = window.innerWidth < 768;
  return <LandingPage mobile={isMobile} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
