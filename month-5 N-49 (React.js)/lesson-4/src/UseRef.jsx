import { useRef } from "react"

export default function App () {
	const xRef = useRef()

	return (
		<>
				<dialog ref={xRef} open={false}>
						Hello world
				</dialog>
		</>
	)
}
