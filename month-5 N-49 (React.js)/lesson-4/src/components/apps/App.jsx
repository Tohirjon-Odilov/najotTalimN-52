import styles from './App.module.scss';

function App({fontName}) {
  console.log(styles[fontName]);
  return (
    <>
      <div className="box">
        <p className={`${styles[fontName]} container`}>Yangi fontlar to'plami</p>
      </div>
    </>
  );
}

export default App;
