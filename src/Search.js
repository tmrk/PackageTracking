const Search = ({packages, setPackages, setSearchTerm}) => {

  // Check if there is any package that is not currently hidden, otherwise the search has no results
  const noresult = () => {
    let noresult = true;
    for (let i = 0; i < packages.length; i++) {
      if (!packages[i].hidden) {
        noresult = false;
        break;
      }
    }
    return noresult;
  }

  const handleChange = (event) => {
    const text = (event.target.value);
    setSearchTerm(text);
    const filteredPackages = packages.map(item => {
      let stringToCheck = ""
        + (item.location_name ? item.location_name : "")
        + (item.parcel_id ? item.parcel_id : "")
        + (item.sender ? item.sender : "")
        + (item.user_name ? item.user_name : "")
        + (item.user_phone ? item.user_phone : "")
        + (item.notes ? item.notes : "");

      if (!stringToCheck.toLowerCase().includes(text.toLowerCase())) {
        item.hidden = true;
      } else item.hidden = false;

      return item;
    });
    setPackages(filteredPackages);
    console.log(packages)
  };

  return (
    <div id="search" className={noresult() ? 'noresult' : ''}>
      <input 
        type="text" 
        placeholder="Search..." 
        onChange={handleChange} 
      />
    </div>
  );

}

export default Search;
