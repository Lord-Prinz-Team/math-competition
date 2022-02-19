import useDocumentTitle from "./hooks/useDocumentTitle";
import About from "./layout/About";
import Header from "./layout/Header";
import Layout from "./layout/Layout";
import Navigation from "./layout/Navigation";

const App = () => {
	const [documentTitle, setDocumentTitle] = useDocumentTitle(
		"Mechanizm z Antykithiry"
	);

	return (
		<Layout>
			<Navigation />
			<Header />
			<About />
		</Layout>
	);
};

export default App;
