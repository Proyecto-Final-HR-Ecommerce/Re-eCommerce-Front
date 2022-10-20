import React  from "react";
import Map from "./map";
const centralStore = {lat:-35.078917,lng: -57.522556};
const laPlataStore = "unas Cordenadas";
const laMatanzaStore = "unas Cordenadas";
const avellanedaStore = "unas Cordenadas";
import "./approved.css";

// function iniciarMap(coord){
//     let coord = {lat:-35.078917,lng: -57.522556};
//     let map = new google.maps.Map(document.getElementById('map'),{
//       zoom: 10,
//       center: coord
//     });
//     let marker = new google.maps.Marker({
//       position: coord,
//       map: map
//     });
// }

const Approved = () => {
let coord = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.1127016795785!2d-57.5225556!3d-35.0789167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeed1c34002ff0598!2zMzXCsDA0JzQ0LjEiUyA1N8KwMzEnMjEuMiJX!5e0!3m2!1ses!2sar!4v1665717554357!5m2!1ses!2sar"
    return (
        
        <div>
            <ul>
                <li>
                Central Store
                </li>
            </ul>
            <ul>
                <li>
                La Plata Store
                </li>
            </ul>
            <ul>
                <li onClick={coord ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3265.1127016795785!2d-57.5225556!3d-35.0789167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeed1c34002ff0598!2zMzXCsDA0JzQ0LjEiUyA1N8KwMzEnMjEuMiJX!5e0!3m2!1ses!2sar!4v1665717554357!5m2!1ses!2sar"}>
                La Matanza Store
                </li>
            </ul>
            <ul>
                <li>
                Avellaneda Store
                </li>
            </ul>
            <Map>hola</Map>
            {/*<iframe className="map" src="not found"></iframe>*/}

        </div>            
            

        
    
        //console.log('hi approved')
    )

}
    


export default Approved;