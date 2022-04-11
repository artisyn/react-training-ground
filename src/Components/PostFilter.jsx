import React from 'react';
import MyInput from '../UI/input/MyInput';
import MySelect from '../UI/select/MySelect';

function PostFilter({ filter, setFilter }) {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<MyInput
				placeholder="Search Post..."
				value={filter.query}
				onChange={(e) =>
					setFilter({ ...filter, query: e.target.value })
				}
			/>

			<MySelect
				value={filter.sort}
				onChange={(selectedSort) =>
					setFilter({ ...filter, sort: selectedSort })
				}
				options={[
					{ value: 'title', name: 'By Name' },
					{ value: 'text', name: 'By Definition' },
				]}
				defaultValue={'Arrange By'}
			/>
		</div>
	);
}

export default PostFilter;
