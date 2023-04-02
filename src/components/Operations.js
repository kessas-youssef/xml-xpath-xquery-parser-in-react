import React, { useState, useEffect } from 'react'
import TextInput from './TextInput'
import DropDown from './DropDown'
import Xpath from './Xpath';

function Operations(props) {

    const [dataSet, setDataSet] = useState([{id: -1, text: 'Pick a query', query: ''}]);
    const [dropdownChoice, setdropdownChoice] = useState(1);
    const [inputType, setInputType] = useState('none');
    const [query, setQuery] = useState('');


    useEffect(() => {
        fetch('dataSet.json', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => setDataSet(() => [{id: -1, text: 'Pick a query', query: ''}, ...data]));
    }, [])

    return (
        <>
            <TextInput queryType='XPath' setQuery={setQuery} setInputType={setInputType} />
            {
                inputType == 'inputField' 
                &&
               <Xpath query={query} setQuery={setQuery} xmlFile={props.xmlFile}/>
            }

            <hr className='hrLine'></hr>
            <DropDown dataSet={dataSet} setInputType={setInputType} setChoice={setdropdownChoice} queryType='XPath' />
            {
                inputType == 'dropdown' 
                &&
                dropdownChoice != -1
                &&
                dataSet.filter(current => current.id == dropdownChoice).map(current => <Xpath key={current.id} id={current.id} text={current.text} query={current.query} xmlFile={props.xmlFile}/>)
            }
        </>
    )
}

export default Operations