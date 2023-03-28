import React from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../store/context.js";
const CardPlanet=({key , planet})=>{

    const {store , actions} = useAppContext();
    const { addFavorite } = actions;
   const name=planet.properties.name;
    return(
<>
<div class="col-sm-4">
    <div className="card-sw cardStyle">
    <div key={planet.uid} className=" m-3 ">
        <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`} className="card-img" alt="..."/>
    
    <div className="card-body"> 
    <h3 className="card-title">{name}</h3>
        <p>{planet.properties.population}</p>
        <p>{planet.properties.climate}</p>
        <div>
            <Link to={`planet/${planet.uid}`} className="btn btn-primary btn-propierties">More info</Link>
            <Link to =""><img onAuxClick={()=>addFavorite(name)} className="iconLike" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8moNqBsueRrMKWQJeVKTeO2oHHUyfS6jr_g&usqp=CAU"/>
            </Link>
        </div>   
    </div>
    </div>
    </div>


</div>


   </>



     
      
     
    )
}
export default CardPlanet;

