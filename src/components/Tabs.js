const Tabs = ({ isActiveTabs, onToggleTabs }) => {
  return (
    <>
      <header>
        <div
          onClick={() => onToggleTabs(1)}
          className={`${isActiveTabs === 1 ? "tabs tabs-active" : "tabs"}`}
        >
          <h3>JavaScript</h3>
        </div>

        <div
          onClick={() => onToggleTabs(2)}
          className={`${isActiveTabs === 2 ? "tabs tabs-active" : "tabs"}`}
        >
          <h3>React Js</h3>
        </div>

        <div
          onClick={() => onToggleTabs(3)}
          className={`${isActiveTabs === 3 ? "tabs tabs-active" : "tabs"}`}
        >
          <h3>Next Js</h3>
        </div>
      </header>
    </>
  );
};

export default Tabs;
