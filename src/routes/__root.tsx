import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
export const Route = createRootRoute({
	component: () => (
		<>
			<ReactQueryDevtools />
			<div className='p-10 flex gap-2'>
				<Link to='/' className='[&.active]:font-bold'>
					Home
				</Link>
				<Link to='/jokes'>Jokes</Link>
			</div>
			<hr />
			<Outlet />
			<TanStackRouterDevtools />
		</>
	),
})
