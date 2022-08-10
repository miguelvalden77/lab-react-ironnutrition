import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search({searchFunction}) {

    const [search, setSearch] = useState("")

    const handleChange = evt =>{
        setSearch(evt.target.value)
        const research = {search}
        searchFunction(research)
    }
    
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input value={search} type="text" onChange={handleChange} />
    </>
  );
}

export default Search;