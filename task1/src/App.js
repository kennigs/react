import { createElement, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Year } from './main/year'

const App = () => {
	const setCount = useState(0)
	const div = createElement('div')
	const a1 = createElement(
		'a',
		{ href: 'https://vitejs.dev' },
		{ target: '_blank' },
	)
	const img1 = createElement(
		'img',
		{ src: { viteLogo } },
		{ className: 'logo' },
		{ alt: 'Vite logo' },
	)
	const a2 = createElement(
		'a',
		{ href: 'https://react.dev' },
		{ target: '_blank' },
	)
	const img2 = createElement(
		'img',
		{ src: { reactLogo } },
		{ className: 'logo react' },
		{ alt: 'React logo' },
	)
	const h1 = createElement('h1', 'Vite + React')
	const div1 = createElement('div', { className: 'card' })
	const button = createElement(
		'button',
		{ onClick: () => setCount((count) => count + 1) },
		'count is {count}',
	)
	const code = createElement('code', 'src/App.jsx')
	const p = createElement('Edit ', { code }, 'and save to test HMR')
	const p1 = createElement(
		'p',
		{ className: 'read-the-docs' },
		'Click on the Vite and React logos to learn more',
	)
	const p2 = createElement('p', { Year })
	document.body.appendChild(div, div1, h1, p1, p2)
	a1.appendChild(img1)
	a2.appendChild(img2)
	div.appendChild(a1, a2)
	div1.appendChild(button, p)
}

// function App() {
//     // declarative
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         {/* imperative */}
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       {/* declarative */}
//       <p><Year /></p>
//     </>
//   )
// }

export default App
