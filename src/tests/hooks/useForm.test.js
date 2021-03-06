import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => {

  const initialForm = {
    name: 'Daniel',
    email: 'dlopezdelgado@gmail.com'
  };

  test('debe regresar un formulario por defecto', () => {

    const { result } = renderHook(() => useForm(initialForm));
    const [formValues, handleInputChange, reset] = result.current;

    expect(formValues).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');

  });

  test('debe cambiar el valor del formulario (cambiar name)', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Daniel López'
        }
      });
    });

    const [formValues] = result.current;

    expect(formValues).toEqual({ ...initialForm, name: 'Daniel López' });

  });

  test('debe restablecer el formulario con RESET', () => {

    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Daniel López'
        }
      });

      reset();
    });

    const [formValues] = result.current;
    expect(formValues).toEqual(initialForm);

  });

});
