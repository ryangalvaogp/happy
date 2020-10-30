import React, { useEffect, useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import mapMarkerImg from '../images/map-marker.svg'
import {FiPlus, FiArrowRight} from 'react-icons/fi'

import {Map, TileLayer, Marker, Popup} from 'react-leaflet';

import api from '../services/api'

import '../styles/pages/orphanagesMap.css'
import mapIcon from '../utils/mapIcon'

interface Orphanage {
    id: number;
    latitude:number;
    longitude:number;
    name: string;
}


export default function OrphanageMap(){
const {push} = useHistory()
    const [orphanages, setOrphanages] = useState <Orphanage[]> ([])
    
    useEffect(()=>{
        api.get('orphanages').then(response =>{
           setOrphanages(response.data)
        })
    }, [])
    console.log(orphanages)

    
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} onClick={()=> push('/')} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
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
            <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicnlhbmdhbHZhb2dwIiwiYSI6ImNrZ2hka3RnMDA1ZWsyc3Mwb2hyNzhxYnkifQ.XRexiw6hKJlnwyDSeheFbw` /*em produção colocar chaveAPI na variavel ambiente*/} />
            
            
            {orphanages.map(orphanages =>{
                return (
                    <Marker
            title={orphanages.name}
            position={[orphanages.latitude, orphanages.longitude]}
            icon={mapIcon}
            key={orphanages.id}
            >
                <Popup closeButton={true} minWidth={240} maxWidth={240} className="map-popup" >
                {orphanages.name}
                <Link to={`/orphanages/details/${orphanages.id}`}>
                <FiArrowRight size={20} color="#fff"/>
                </Link>
            </Popup>
            
            </Marker>
                )
            })}


            
        </Map>
     
     <Link to="/orphanages/create" className="create-orphanage">
     <FiPlus size={32} color="#fff"/>
     </Link>
        </div>
    )
}