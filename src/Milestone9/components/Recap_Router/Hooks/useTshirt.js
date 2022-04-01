import { useEffect, useState } from "react";

const useTshirt = () => {
	const [shirts, setShirts] = useState([]);

	useEffect(() => {
		fetch(
			"https://raw.githubusercontent.com/ProgrammingHero1/tshirt-mania-module-54/main/public/tshirts.json"
		)
			.then(res => res.json())
			.then(data => setShirts(data));
	}, []);

	return [shirts, setShirts];
};

export default useTshirt;
