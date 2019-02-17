import React from "react";
import ReactDOM from "react-dom";
import { ListView } from "react-expandable-listview";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "Blue" }}>React JS</h1>
      <table>
        <tr>
          <td style={{ background: "blue", width: "200px" }}>
            <ListView aveCellHeight={250}>
              {Array.apply(null, Array(3)).forEach((_, i) => (
                <ListViewStickyItem height={250} key={i}>
                  <div>Item at Index: {i}</div>
                </ListViewStickyItem>
              ))}
            </ListView>
          </td>
          <td id="body" />
        </tr>
      </table>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
