import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Benefits from "./components/Benifits";
import FAQ from "./components/FAQ";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
import ReferContainer from "./components/ReferContainer";
import Dashboard from "./components/Dashboard";
import { ReferProvider } from "./utils/ReferContext";

const App = () => {
	return (
		<ReferProvider>
			<Router>
				<Routes>
					<Route
						path='/'
						element={
							<div className='flex flex-col gap-16'>
								<Home />
								<ReferContainer />
								<Benefits />
								<FAQ />
								<GetInTouch />
								<Footer />
							</div>
						}
					/>
					<Route
						path='/dashboard'
						element={<Dashboard />}
					/>
				</Routes>
			</Router>
		</ReferProvider>
	);
};

export default App;