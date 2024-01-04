import Layout from "@/Layout";
import Dashboard from "@/components/pages/Dashboard";
import Contact from "@/components/pages/Contact";
import Details from "./pages/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="/" element={<Dashboard />} />
					<Route path="/contact-us" element={<Contact />} />
					<Route path="/details/:id" element={<Details />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
