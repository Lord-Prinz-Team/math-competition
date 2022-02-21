import { useEffect } from "react";
import useDocumentTitle from "./hooks/useDocumentTitle";
import About from "./layout/About";
import Header from "./layout/Header";
import Layout from "./layout/Layout";
import Navigation from "./layout/Navigation";
import Origin from "./layout/Origin";

const App = () => {
	const [documentTitle, setDocumentTitle] = useDocumentTitle(
		"Mechanizm z Antykithiry"
	);

	return (
		<Layout>
			<Navigation />
			<Header />
			<About />
			<Origin />
		</Layout>
	);
};

export default App;
