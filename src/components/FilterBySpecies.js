const FilterBySpecies = props =>{
    const handleChange = (e) =>{
      props.handleFilter({
        key:'species',
        value:e.target.value
      });
    }
    return (
        <>
        <label className="form__label" htmlFor="species">
        Especie:
        </label>
        <select className="form__input--select" name="species" id="species" onChange={handleChange}>
          <option value="all">Todos</option>
          <option value="human">Humano</option>
          <option value="alien">Alien</option>
        </select>
     </>
    )
  }
  export default FilterBySpecies;