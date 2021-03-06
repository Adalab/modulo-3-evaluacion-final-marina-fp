const FilterByName = props =>{
    const handleChange = (e) =>{
      //props.handleFilter('name',e.target.value);
      props.handleFilter({
        key:'name',
        value:e.target.value
      });
    }
    return (
        <div className="form__name" >
        <label className="form__label" htmlFor="name" placeholder="Search">
          Show me what you got:
        </label>
        <input className="form__input" type="text" name="name" id="name" onChange={handleChange}/>
        </div>
    )
  }
  export default FilterByName;
  