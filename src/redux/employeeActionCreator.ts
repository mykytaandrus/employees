import axios from 'axios';
import { AppDispatch } from './store';
import { employeeFetching, employeeFetchingError, employeeFetchingSuccess } from './employeeSlice';
import { IEmployee } from '../interfaces/IEmployee';

export const fetchEmployee = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(employeeFetching());

    const response = await axios.get<IEmployee[]>('https://jsonplaceholder.typicode.com/users');

    dispatch(employeeFetchingSuccess(response.data));
  } catch(error) {
    let errorMessage = 'Failed to do something exceptional';

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    employeeFetchingError(errorMessage);
  }
};
