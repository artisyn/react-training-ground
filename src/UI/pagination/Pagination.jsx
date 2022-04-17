import React from 'react';
import { getPagesArray } from '../../utils/pages';

function Pagination({ totalPages, page, changePage }) {
	let pagesArray = getPagesArray(totalPages);

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				flexWrap: 'wrap',
				justifyContent: 'center',
				margin: '1rem auto',
			}}
		>
			{pagesArray.map((el) => (
				<button
					onClick={() => changePage(el)}
					className={el === page && 'page__current'}
					style={{ margin: '0 .2rem', cursor: 'pointer' }}
				>
					{el}
				</button>
			))}
		</div>
	);
}

export default Pagination;
