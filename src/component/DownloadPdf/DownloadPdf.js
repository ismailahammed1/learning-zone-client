import React from "react";

// @ts-ignore
import Pdf from "react-to-pdf";

const ref = React.createRef();

const DownloadPdf = () => {
  return (
    <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </div>
  );
};
export default DownloadPdf;
