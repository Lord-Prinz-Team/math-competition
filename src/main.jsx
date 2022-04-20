import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { ParallaxProvider } from "react-scroll-parallax";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<ParallaxProvider>
				<App />
			</ParallaxProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
