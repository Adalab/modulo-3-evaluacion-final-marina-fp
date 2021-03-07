const FilterBySpecies = (props) => {
  const handleChange = (e) => {
    props.handleFilter({
      key: "species",
      value: e.target.value,
    });
  };
  return (
    <div className='filter__form--species'>
      <label className='filter__form--label' htmlFor='species'>
        Species
      </label>
      <select
        className='filter__form--input'
        name='species'
        id='species'
        onChange={handleChange}
        value={props.species}
      >
        <option value='all'>All</option>
        <option value='Alien'>Alien</option>
        <option value='Human'>Human</option>
      </select>
    </div>
  );
};
export default FilterBySpecies;
