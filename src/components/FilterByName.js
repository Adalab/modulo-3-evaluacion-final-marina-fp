const FilterByName = props =>{
    const handleChange = (e) =>{
      //props.handleFilter('name',e.target.value);
      props.handleFilter({
        key:'name',
        value:e.target.value
      });
    }
    return (
        <>
        <label className="form__label display-block" htmlFor="name" placeholder="Search">
          Show me what you got:
        </label>
        <input className="form__input-text" type="text" name="name" id="name" onChange={handleChange}/>
        </>
    )
  }
  export default FilterByName;
  