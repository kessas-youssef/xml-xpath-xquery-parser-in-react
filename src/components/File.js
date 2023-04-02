import React, {useState} from 'react'

function File(props) {
    const [fileText, setFileText] = useState('');


    function fetchGet(file) {
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                setFileText(xhttp.responseText);
            }
        };
        xhttp.open("GET", file, true);
        xhttp.send();
    }
    fetchGet(props.fileName);

    return (
        <pre className='dtdFile'>
            {fileText}
        </pre>
    )
}

export default File