import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { createJokeQueryActions } from '../api/createJokeQueryActions'

export const Route = createFileRoute('/jokes')({
	component: Jokes,
})

function Jokes() {
	const { data: joke } = useQuery(createJokeQueryActions())
	if (!joke) return <div>Loading...</div>
	return (
		<div className='text-5xl p-spacing'>
			<h1 className='pb-inner-spacing gap-spacing font-chapaev'>Jokes</h1>
			<p className='font-bold font-chapaev'>{joke.setup}</p>

			<p className='font-chapaev'>{joke.punchline}</p>
		</div>
	)
}
