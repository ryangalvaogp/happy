import { Router } from 'express'

import multer from 'multer'

import uploadConfig from './config/upload'

const Routes = Router()
const upload = multer(uploadConfig)


import HomeController from './controllers/homeControll'

Routes.get('/orphanages', HomeController.index)
Routes.get('/orphanages/:id', HomeController.show)
Routes.post('/orphanages',upload.array('images') ,HomeController.create)
Routes.delete('/orphanages/:id', HomeController.delete)

export default Routes; 


