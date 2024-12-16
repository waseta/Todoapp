import { render, fireEvent } from '@testing-library/svelte';
import TodoApp from './index.svelte';

test('agrega una nueva tarea', async () => {
    const { getByPlaceholderText, getByText } = render(TodoApp);

    const input = getByPlaceholderText('Add a new task...');
    const button = getByText('Add');

    await fireEvent.input(input, { target: { value: 'Nueva tarea' } });
    await fireEvent.click(button);

    expect(getByText('Nueva tarea')).toBeInTheDocument();
});