import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/Babai')({
	component: Babai,
})

function Babai() {
	return <div>Hello Babai</div>
}

export default Babai
