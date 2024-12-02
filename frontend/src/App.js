// import logo from './logo.svg';
import './App.css';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import About from './pages/about/About';
import News from './pages/news/News';
// import Council from './pages/council/Council'
// import { Route, Routes} from 'react-router-dom'
import Legislature from './pages/council/legislature/Legislature';
import Executive from './pages/council/executive/Executive';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



function App() {

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />
		},
	
		{
			path: "/about",
			element: <About />
		},
		{
			path: "/projects",
			element: <Projects />
		},
		{
			path: "/legislature",
			element: <Legislature />,
		},
		{
			path: "/executive",
			element: <Executive />,
		},
		{
			path: "/news",
			element: <News />
		},
		{
			path: "/contact",
			element: <Contact />
		},
	])

	return (
		<div>
			{/* <Routes>
				<Route
					path='/'
					element={<Home />}
				/>

				<Route
					path='/projects'
					element={<Projects />}
				/>

				<Route
					path='/contact'
					element={<Contact />}
				/>

				<Route
					path='/news'
					element={<News />}
				/>

				<Route
					path='/council/legislature'
					element={<Legislature />}
				/>

				<Route path='/council' element={<News />}>
					<Route path='legislature' element={<Legislature />}/>
					<Route path='executive' element={<Executive />}/>
				</Route>

				<Route
					path='/about'
					element={<About />}
				/>
			</Routes> */}

			<RouterProvider router={router} />
		</div>
	);
}

export default App;
