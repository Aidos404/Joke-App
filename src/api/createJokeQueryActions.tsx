import { queryOptions } from '@tanstack/react-query'
import { z } from 'zod'
const JokeCheme = z.object({
	id: z.number(),
	type: z.string(),
	setup: z.string(),
	punchline: z.string(),
})
export type Joke = z.infer<typeof JokeCheme>
export function createJokeQueryActions() {
	return queryOptions({
		queryKey: ['joke'],
		queryFn: async () =>
			fetch('https://official-joke-api.appspot.com/random_joke').then((res) =>
				res.json().then((data) => JokeCheme.parse(data))
			),
	})
}
