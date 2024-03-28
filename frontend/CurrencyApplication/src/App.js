import Recovery from "./components/RegisterPage/Recovery.jsx"
import Registration from "./components/RegisterPage/Registration.jsx"
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom"
import MainPage from "./components/MainPage/MainPage.jsx"
import Entry from "./components/RegisterPage/Entry.jsx"

function App() {
	return (
		<BrowserRouter basename='/'>
			<Routes>
			<Route
					path='/'
					element={
						<>
							<a href='/registration'>Registration</a>
							<br />
							<a href='/recovery'>Recovery</a>
							<br />
							<a href='/mainPage'>MainPage</a>
							<br />
							<a href='/entry'>Entry</a>
							<br />
						</>
					}
				/>
				<Route path='registration' element={<Registration />} />
				<Route path='recovery' element={<Recovery />} />
				<Route path='mainPage' element={<MainPage/>}/>
				<Route path='entry' element={<Entry/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App