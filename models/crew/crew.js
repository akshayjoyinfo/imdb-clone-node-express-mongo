let buildMakeCrew = function(crewValidator) {
  return ({
    firstname,
    lastname,
    dob,
    region,
  } = {}) => {
    let {error} = crewValidator({firstname, lastname, dob, region})
    if (error) throw error

    return {
      getFirstName: () => firstname,
      getLastName: () => lastname,
      getDob: () => dob,
      getRegion: () => region
    }
  }
}

module.exports = buildMakeCrew;
