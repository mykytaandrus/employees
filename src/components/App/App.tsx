import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchEmployee } from '../../redux/employeeActionCreator';
import './App.scss';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { employees, error, isFetching } = useAppSelector(state => state);

  useEffect(() => {
    dispatch(fetchEmployee());
  }, [dispatch]);

  return (
    <div className='app'>
      Employees:
      
      {isFetching && <div>Loading...</div>}
      {error && <div>Error...</div>}
      {employees.map(employee => <div key={employee.id}>{employee.name}</div>)}
    </div>
  );
}

export default App;
