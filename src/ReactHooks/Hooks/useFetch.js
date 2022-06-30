import { useState, useEffect } from "react";

const useFetch = url => {
	// const [loading, setLoading] = useState(true);
	// const [error, setError] = useState(null);
	// const [data, setData] = useState([]);

	const [request, setRequest] = useState({
		data: [],
		loading: true,
		error: null,
	});

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		try {
	// 			const response = await fetch(url);
	// 			const data = await response.json();
	// 			setData(data);
	// 			setLoading(false);
	// 		} catch (error) {
	// 			setError(error);
	// 			setLoading(false);
	// 		}
	// 	};

	// 	fetchData();
	// }, [url]);
	// return { data, loading, error };

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();

				setRequest({
					loading: false,
					data: data,
				});
			} catch (error) {
				setRequest({
					loading: false,
					error: error,
				});
			}
		};

		fetchData();
	}, [url]);

	return { ...request };
};

export default useFetch;
