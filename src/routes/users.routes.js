import { Router } from "express";
import { createNewUser, deleteUserById, getUserById, getUsuarios,getTotalUsers,updateUserById, getLocais, getCodEmpresa, getVeiculosByCod, createNewReservation, updateDisponivelById, getReservaById, deleteReservaById, updateDisponivel, updateDisponivelByPlaca } from "../controllers/users.controller";
const { sendEmail } = require('../email');

const router = Router();

router.get('/usuarios', getUsuarios)

router.post('/usuarios', createNewUser)

router.get('/usuarios/count', getTotalUsers )

router.get('/usuarios/:id', getUserById)

router.delete('/usuarios/:id', deleteUserById )

router.put('/usuarios/:id', updateUserById)

router.get('/locais', getLocais)

router.get('/locais/:Numero', getCodEmpresa)

router.get('/veiculos/:Cod', getVeiculosByCod)

router.post('/reservar', createNewReservation)

router.put('/veiculos/:id', updateDisponivelById)

router.get('/reservas/:id', getReservaById)

router.delete('/reservas/del/:reservaID', deleteReservaById)

router.put('/reservas/:PLACA', updateDisponivelByPlaca)

router.post('/send-email', async (req, res) => {
    const { to, subject, text } = req.body;

    try {
        await sendEmail(to, subject, text);
        res.status(200).send('E-mail enviado com sucesso');
    } catch (error) {
        console.error(error);
        res.status(500).send('Ocorreu um erro ao enviar o e-mail');
    }
});


export default router