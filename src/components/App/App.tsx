import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchEmployee } from '../../redux/employeeActionCreator';
import Card from '../Card/Card';
import './App.scss';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { employees, error, isFetching } = useAppSelector(state => state);

  useEffect(() => {
    dispatch(fetchEmployee());
  }, [dispatch]);

  return (
    <div className='app'>
      <h1 className='app__title'>Employees:</h1>
      <div className='app__wrapper'>
        {isFetching && <div>Loading...</div>}
        {error && <div>Error...</div>}
        {employees.map(employee => <Card key={employee.id} email={employee.email} name={employee.name} />)}
      </div>
    </div>
  );
}

export default App;
