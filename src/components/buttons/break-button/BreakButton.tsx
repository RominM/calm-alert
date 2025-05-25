import "./break-button.scss";

const BreakButton = () => {
    return (
      <div className="break-button">
        <div className="break-button__orbiting-shapes">
          <div className="break-button__orbiter break-button__orbiter-1"><div className="break-button__orb break-button__orb-1"></div></div>
          <div className="break-button__orbiter break-button__orbiter-2"><div className="break-button__orb break-button__orb-2"></div></div>
          <div className="break-button__orbiter break-button__orbiter-3"><div className="break-button__orb break-button__orb-3"></div></div>
          <div className="break-button__orbiter break-button__orbiter-4"><div className="break-button__orb break-button__orb-4"></div></div>
        </div>
        <button className="break-button__main-button">Faire une pause</button>
      </div>
    );
}

export default BreakButton; 