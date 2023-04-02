
function DropDown(props) {

    const onChangeHandler = e => {
        props.setChoice(() => e.target.value);
        props.setInputType('dropdown');
    }

    return (
        <div className="dropdown">
            <label htmlFor='xpathSelect' className="dropdown__label">Predefined {props.queryType} queries : </label>
            <select name='xpathSelect' onChange={onChangeHandler} className="dropdown__menu">
                {props.dataSet.map(current => <option key={current.id} value={current.id}>{current.text}</option>)}
            </select>
        </div>
    )
}

export default DropDown