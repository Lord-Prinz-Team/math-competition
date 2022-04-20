import useDocumentTitle from "../hooks/useDocumentTitle";
import About from "../layout/About";
import Construction from "../layout/Construction";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Layout from "../layout/Layout";
import Navigation from "../layout/Navigation";
import Origin from "../layout/Origin";
import Research from "../layout/Research";

const Main = () => {
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
			<Research />
			<Footer />
		</Layout>
	);
};

export default Main;
