import { shallow } from 'enzyme';
import React from 'react';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';


describe('Pruebas en TodoListItem', () => {

  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const todo = demoTodos[0];

  const wrapper = shallow(
    <TodoListItem
      todo={ todo }
      index={ 0 }
      handleDelete={ handleDelete }
      handleToggle={ handleToggle }
    />
  );

  test('Debe mostrarse correctamente', () => {

    expect(wrapper).toMatchSnapshot();

  });


  test('Debe llamar la funcion handleDelete', () => {

    wrapper.find('button').simulate('click');
    expect(handleDelete).toHaveBeenCalledWith(todo.id);

  });

  test('Debe llamar la funcion handleToggle', () => {

    wrapper.find('p').simulate('click');
    expect(handleToggle).toHaveBeenCalledWith(todo.id);

  });

  test('Debe mostrar el texto correctamente', () => {

    const todoText = wrapper.find('p').text().trim();
    expect(todoText).toBe(`1. ${todo.desc}`);

  });

  test('debe tener la clase complete', () => {

    const todo = demoTodos[0];
    todo.done = true;

    const wrapper = shallow(
      <TodoListItem
        todo={ todo }
      />
    );

    expect(wrapper.find('p').hasClass('complete')).toBe(true);

  });





});
