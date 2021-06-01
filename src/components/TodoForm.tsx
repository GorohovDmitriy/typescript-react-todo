import React, { useRef } from 'react'

interface TodoFormProps {
	onAdd(title: string): void
}


const TodoForm: React.FC<TodoFormProps> = (props) => {

	const ref = useRef<HTMLInputElement>(null)

	const keyPressHandler = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			props.onAdd(ref.current!.value)
			ref.current!.value = ''
		}
	}

	return (
		<div className='input-field mt2'>
			<input
				ref={ref}
				type='text'
				id='title'
				placeholder='Ведите название дела'
				onKeyPress={keyPressHandler}
			/>
			<label htmlFor='titel' className='active'>
				Ведите название дела
			</label>
		</div>
	)
}

export default TodoForm
