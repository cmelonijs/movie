import Header from './components/Header/Header';import { useAppSelector } from './hooks/storeHook';

function App() {
  const {darkTheme} = useAppSelector(state => state);
  return (
    <h2 className={darkTheme ? "dark" : ""}>
      <div className='dark:bg-red-900 dark:text-white min-h-screen px-4 lg:px-12 pb-20'>
        <Header />
      </div>
    </h2>
  );
}

export default App;
