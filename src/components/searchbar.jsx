import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useContext, useState } from 'react';
import { SearchProvider } from '../context/productcntxt';
function SearchBar(props) {
  const [currentval,setcurrentval]=useState([]);
  const{searchHandler} = useContext(SearchProvider);

  function filter()
  {
    searchHandler(currentval)
  }

  return (
    <>
    <div className='container p-3'>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="search"
          aria-label="search"
          aria-describedby="basic-addon1"
          value={currentval}
          onChange={(e)=>setcurrentval(e.target.value)}
        />
        <button onClick={filter} className='bg-info text-white'>search</button>
      </InputGroup>
      </div>
    </>
  );
}

export default SearchBar;