import './movie-list-item.css'

const MovieListItem = () => {
	return (
		<li className='list-group-item d-flex justify-content-between'>
			<span className='list-group-item-label'>Empire of Osman</span>
			<input type='number' className='list-group-item-input' defaultValue='989' />
			<div className='d-flex justify-content-center align-items-center'>
				<button type='button' className='btn-cookie btn-sm '>
					<i className='fas fa-cookie'></i>
				</button>

				<button type='button' className='btn-trash btn-sm '>
					<i className='fas fa-trash'></i>
				</button>
				<i className='fas fa-star'></i>
			</div>
		</li>
	)
}

export default MovieListItem
