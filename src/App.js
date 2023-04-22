import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import Operations from './components/Operations';
import XmlFile from './components/XmlFile'
import File from './components/File';



function App() {

  const [section, setSection] = useState('');
  const [xmlresponse, setXmlResponse] = useState('');
  const [xmlText, setXmlText] = useState('');


  function fetchGet(file = 'Livraison.xml') {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        setXmlResponse(xhttp.responseXML);
        setXmlText(xhttp.responseText);
      }
    };
    xhttp.open("GET", file, true);
    xhttp.send();
  }

  useEffect(() => fetchGet(), [])



  const renderedSection = () => {
    if (section == 'xpath')
      return <Operations xmlFile={xmlresponse} />;
    if (section == 'xmlfile')
      return <XmlFile xmlTextContent={xmlText} />;
    if (section == 'dtdfile')
      return <File fileName='Livraison.dtd' />;
    if (section == 'xsdfile')
      return <File fileName='Livraison.xsd' />;
  }

  return (
    <div className="App">
      <NavBar setSection={setSection} />
      {renderedSection()}
    </div>
  );
}

export default App;
