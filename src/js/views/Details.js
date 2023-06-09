import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
const Details =()=>{


const { id } = useParams();
const api =`https://www.swapi.tech/api/people/${id}`;
const [detailPeople , setDetailPeople] = useState([])
const [properties , setProperties]= useState([])

useEffect(()=>{
fetch(api)
.then(res=>res.json())
.then(res => {setDetailPeople(res.result)
 return res.result.properties
}).then (res => setProperties(res))
.catch(err=> console.log(err))

},[])
console.log(detailPeople)
console.log(properties)

const params= useParams();
console.log("PARAMS:", params)
return (
   <>
  
<div className="container m-auto row">
<h1>Details</h1>
<img className="col-4 m-4" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />
<div className="col-4">
<h1>{properties.name}</h1>

<h2>{detailPeople.description}</h2>
<p>Birth year: {properties.birth_year}</p>
<p>Created: {properties.created}</p>
<p>Height: {properties.height}</p>
<p>Eye color: {properties.eye_color}</p>
<p>Skin color: {properties.skin_color}</p>

</div>
</div>
</>

)

}
export default Details;

