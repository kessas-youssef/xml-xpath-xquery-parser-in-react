import { useEffect, useState } from "react";

function Xpath(props) {

	function showResult(xml, path) {
		try {
			if (xml.evaluate || path == '') {
				setError(false);
				const nodesSnapshot = xml.evaluate(
					path,
					xml,
					null,
					XPathResult.ANY_TYPE,
					null
				);
				if (nodesSnapshot.resultType === 1) {
					setTest(prev => [nodesSnapshot.numberValue]);
				} else {
					let result, items = [];
					while ((result = nodesSnapshot.iterateNext())) {
						items.push(result.textContent);
					}
					setTest(prev => items);
				}
			} else {
				setError(true);
			}
		} catch (error) {
			console.error(error);
			setError(true);
		}
	}


	const [test, setTest] = useState([]);
	const [error, setError] = useState(true);

	useEffect(() => {
		showResult(props.xmlFile, props.query);
	}, [props]);

	return (
		<div key={props.id} className='xpath'>
			<p className='xpath__queryText'>{props.text}</p>
			<p className='xpath__query'><span className="xpath__queryLabel">Query : </span>{props.query}</p>
			<p className="xpath__resultLabel">Result : </p>
			{test.map((current, index) => <p className="xpath__result" key={index}>{current}</p>)}
			{error && <p className="xpath__error">Incorrect query !</p>}
		</div>
	)
}


export default Xpath;