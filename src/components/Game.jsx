import Field from "./Field";
import Panel from "./Panel";

function Game() {
  return (
    <div className="game">
      <Panel>
        <Field />
      </Panel>
    </div>
  )
}

export default Game;