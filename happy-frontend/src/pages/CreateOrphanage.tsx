
import React, { FormEvent, useState, ChangeEvent } from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet'
import { FiPlus } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import mapIcon from '../utils/mapIcon'
import api from "../services/api";
import '../styles/pages/create-orphanage.css';
import Orphanage from "./Orphanage";

export default function CreateOrphanage() {
  const history = useHistory()
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [instructions, setInstructions] = useState('')
  const [opening_hours, setOpening_hours] = useState('')
  const [open_on_weekends, setOpen_on_weekends] = useState(true)
  const [images, setImages] = useState<File[]>([])
  const [previewImg, setPreviewImg] = useState<string[]>([])
  const { goBack } = useHistory()


  function handleSelectImages(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return
    }
    const selectedImages = Array.from(e.target.files)
    setImages(selectedImages)
    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image)
    })
    setPreviewImg(selectedImagesPreview)
  }

  function handeMapClick(e: LeafletMouseEvent) {

    const { lat, lng } = e.latlng
    setPosition(
      {
        latitude: lat,
        longitude: lng
      }
    )
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const { latitude, longitude } = position
    
    const data = new FormData()
    data.append('name', name)
    data.append('latitude', String(latitude))
    data.append('longitude', String(longitude))
    data.append('about', about)
    data.append('instructions', instructions)
    data.append('opening_hours', opening_hours)
    data.append('open_on_weekends', String(open_on_weekends))
    images.forEach(image => {
      data.append('images', image)
    })

    await api.post('orphanages', data)

    alert("Orphanage created sucess")
    history.push('/app')
  }

  return (
    <div id="page-create-orphanage">
      {Sidebar(goBack)}

      <main>
        <form onSubmit={handleSubmit} className="create-orphanage-form">
          <fieldset>
            <legend>Dados:</legend>

            <Map
              center={[-2.995498, -47.354883]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={handeMapClick}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicnlhbmdhbHZhb2dwIiwiYSI6ImNrZ2hka3RnMDA1ZWsyc3Mwb2hyNzhxYnkifQ.XRexiw6hKJlnwyDSeheFbw`}
              />

              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[
                    position.latitude,
                    position.longitude
                  ]}
                />
              )}
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome:</label>
              <input
                id="name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre: <span>Máximo de 300 caracteres</span></label>
              <textarea
                id="about"
                maxLength={300}
                value={about}
                onChange={e => setAbout(e.target.value)}
              />
            </div>
            <div className="input-block">
              <label htmlFor="images">Fotos:</label>
              <div className="images-container">

                {previewImg.map(image => {
                  return (
                    <img key={image} src={image} alt={Orphanage.name} className="new-image">

                    </img>
                  )
                })}

                <label
                  htmlFor="images[]"
                  className="new-image"
                >
                  <FiPlus size={24} color="#15b6d6" />
                </label>
              </div>
              <input multiple type="file" onChange={handleSelectImages} id="images[]" />
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções:</label>
              <textarea
                id="instructions"
                value={instructions}
                onChange={e => setInstructions(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Horário:</label>
              <input
                id="opening_hours"
                value={opening_hours}
                onChange={e => setOpening_hours(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende final de semana?</label>

              <div className="button-select">
                <button
                  type="button"
                  className={open_on_weekends ? 'active' : ''}
                  onClick={() => setOpen_on_weekends(true)}
                >Sim
                </button>

                <button
                  type="button"
                  className={!open_on_weekends ? 'active' : ''}
                  onClick={() => setOpen_on_weekends(false)}
                >Não
                 </button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}
