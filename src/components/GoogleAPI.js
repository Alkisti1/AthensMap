
const api = 'https://api.foursquare.com/v2/venues/';
const version = '20180411';
const lang = 'en';

export const getDetails = (id) =>
  fetch(`${api}${id}?client_id=${JZCAWJMRWCKLLIOKPYZR3VWDAKAFKGT1NTTKLIR2HJYMIXBY}&client_secret=${UAULBVBHNHJUYBUQFMN0EAZKZ5GS3R5DU5WYUR0EFHPTM31K}&v=${version}&locale=${lang}`)
    .then(res => res.json())
    .then(data => data.response.venue)
    .catch(err => console.log('Couldn't retrieve venue details with ', err))nt_id`
