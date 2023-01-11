import { React } from 'react';
import { FilterForm } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import {filterContact} from '../../redux/filterSlice'
import { getFilter } from 'redux/selectors';


const Filter = () => {
  const dispatch = useDispatch()
  const contactFilter = useSelector(getFilter)

  const handleSearch = event => {
   
    dispatch(filterContact(event.currentTarget.value));
  };
  return (
    <FilterForm>
      <label>
        Find contact by Name <br />
        <input
          type="text"
          name="search"
          value={contactFilter}
          onChange={handleSearch}
        ></input>
      </label>
    </FilterForm>
  );
};

export default Filter;

