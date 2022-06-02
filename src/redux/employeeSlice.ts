import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IEmployee } from '../interfaces/IEmployee';

interface EmployeeState {
  employees: IEmployee[];
  isFetching: boolean;
  error: string;
};

const initialState: EmployeeState = {
  employees: [],
  isFetching: false,
  error: ''
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState: initialState,
  reducers: {
    employeeFetching: (state) => {
      state.isFetching = true;
    },
    employeeFetchingSuccess: (state, action: PayloadAction<IEmployee[]>) => {
      state.isFetching = false;
      state.error = '';
      state.employees = action.payload;
    },
    employeeFetchingError: (state, action: PayloadAction<string>) => {
      state.isFetching = false;
      state.error = action.payload;
    }
  }
});

export const { employeeFetching, employeeFetchingError, employeeFetchingSuccess } = employeeSlice.actions;

export default employeeSlice.reducer;
