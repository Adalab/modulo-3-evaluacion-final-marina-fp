const FilterBySpecies = props =>{
    const handleChange = (e) =>{
      props.handleFilter({
        key:'species',
        value:e.target.value
      });
    }
    return (
        <div className="form__species" >
        <label className="form__label" htmlFor="species">
        Species:
        </label>
        <select className="form__input--select" name="species" id="species" onChange={handleChange}>
          <option value="all">All</option>
          <option value="Alien">Alien</option>
          <option value="Human">Human</option>
        </select>
     </div>
    )
  }
  export default FilterBySpecies;