import React from 'react';
import './App.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
//  <FontAwesomeIcon icon={faSun} color="blue" spin />
//  <FontAwesomeIcon icon={faMoon} color="red" />

function App() {
  const [backgroundColor, setBackgroundColor] = React.useState('#fff');
  const dayImage =
    'https://res.cloudinary.com/dhantey/image/upload/v1656096294/Dante/day-mode_rps81u.gif';
  const nightImage =
    'https://res.cloudinary.com/dhantey/image/upload/v1656097891/Dante/moon_zpthfo.gif';

  React.useEffect(() => {
    document.body.style.background = backgroundColor;
  }, [backgroundColor]);

  function onButtonClick() {
    setBackgroundColor(backgroundColor === '#fff' ? '#242526' : '#fff');
  }

  return (
    <>
      {backgroundColor === '#fff' ? (
        <h1 className="text text-light">
          LIGHT MODE
          <span className="smiley">🌝</span>
        </h1>
      ) : (
        <h1 className="text text-night">
          NIGHT MODE
          <span className="smiley">🌚</span>
        </h1>
      )}

      {backgroundColor === '#fff' ? (
        <label className="switch">
          <input
            className="switch-input"
            type="checkbox"
            onClick={onButtonClick}
          />
          <span className="slider round"></span>
          <h3 className="sun">Light</h3>
          <h3 className="sun-moon">Dark</h3>
        </label>
      ) : (
        <label className="switch">
          <input
            className="switch-input"
            type="checkbox"
            onClick={onButtonClick}
          />
          <span className="slider round"></span>
          <h3 className="moon-sun">Light</h3>
          <div className="half-moon"></div>
          <h3 className="moon">Dark</h3>
        </label>
      )}
      <img
        className="image"
        src={backgroundColor === '#fff' ? dayImage : nightImage}
        alt="day and dark mode"
      />
    </>
  );
}

export default App;
