const FilterByName = (props) => {
  const handleChange = (e) => {
    props.handleFilter({
      key: "name",
      value: e.target.value,
    });

    return (
      <>
        <label className='form__label' htmlFor='name'>
          Filtrar por nombre:
        </label>
        <input
          className='form__input'
          type='text'
          name='name'
          id='name'
          onChange={handleChange}
        />
      </>
    );
  };
};

export default FilterByName;
