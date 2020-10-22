import React from 'react'
import {Link} from 'react-router-dom'
import mapMarkerImg from '../images/map-marker.svg'
import {FiPlus} from 'react-icons/fi'
import 'leaflet/dist/leaflet.css'
import {Map, TileLayer} from 'react-leaflet';



import '../styles/pages/orphanagesMap.css'

export default function orphanageMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas criançass estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Pará</strong>
                    <span>Paragominas</span>
                </footer>
            </aside>

        <Map 
        center={[-2.995498, -47.354883]}
        zoom={15}
        style={{width:'100%', height:'100%'}}
        >\
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            

        </Map>
     
     <Link to="" className="create-orphanage">
     <FiPlus size={32} color="#fff"/>
     </Link>
        </div>
    )
}