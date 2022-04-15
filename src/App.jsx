import useDocumentTitle from "./hooks/useDocumentTitle";
import About from "./layout/About";
import Construction from "./layout/Construction";
import Footer from "./layout/Footer";
import FunFact from "./layout/FunFact";
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
			<Construction />
			<FunFact />
			<Footer />
		</Layout>
	);
};

export default App;
