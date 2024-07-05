import { Link, createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute('/')({
	component: Home,
})

function Home() {
	return (
		<div>
			<h1 className='font-chapaev'>Home</h1>
			<Link to='./babai'>
				<h2>STAY WITH ME</h2>
			</Link>
		</div>
	)
}
