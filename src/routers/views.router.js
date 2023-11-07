import { Router } from 'express'

const router = Router()


router.get('/', (req, res) => {
  //recibe ('nombre del html' y {los parametros que vamos a pasar en formato array})
  res.render('index', {})
})

export default router