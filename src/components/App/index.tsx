import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from 'components/About'
import Contact from 'components/Contact'
import Home from 'components/Home'

const App = (): ReactElement => (
	<main>
		<BrowserRouter>
			<Switch>
				<Route path="/contact">
					<Contact />
				</Route>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</BrowserRouter>
	</main>
)

export default App