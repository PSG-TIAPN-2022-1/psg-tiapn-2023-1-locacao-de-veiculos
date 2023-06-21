import { getConnection, sql, queries } from "../database"
import { querieLocais, querieRetornaCodEmpresa, querieVeiculos, querieReservas } from "../database/querys";

export const getUsuarios = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllUsers);
        res.json(result.recordset)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

export const createNewUser = async (req, res) => {
    const { NOME_COMPLETO, NACIONALIDADE, CPF, GENERO, CELULAR, EMAIL, SENHA } = req.body

    if (NOME_COMPLETO == null) {
        return res.status(400).json({ msg: 'Porfavor escrevas todos os campos' })
    }

    

    try {

        const pool = await getConnection();
        await pool
            .request()
            .input("NOME_COMPLETO", sql.VarChar, NOME_COMPLETO)
            .input("NACIONALIDADE", sql.VarChar, NACIONALIDADE)
            .input("CPF", sql.VarChar, CPF)
            .input("GENERO", sql.VarChar, GENERO)
            .input("CELULAR", sql.VarChar, CELULAR)
            .input("EMAIL", sql.VarChar, EMAIL)
            .input("SENHA", sql.VarChar, SENHA)
            .query(queries.addNewUser)

        res.json({NOME_COMPLETO, NACIONALIDADE, CPF, GENERO, CELULAR, EMAIL, SENHA })
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

export const getUserById = async (req, res) =>{
    const {id} = req.params;

    const pool = await getConnection();
    const result = await pool
    .request()
    .input("ID", id)
    .query(queries.getUserbyId);

    
    res.send(result.recordset[0]);
}

export const deleteUserById = async (req, res) =>{
    const {id} = req.params;

    const pool = await getConnection();
    const result = await pool
    .request()
    .input("ID", id)
    .query(queries.deleteUserById);

    
    res.sendStatus(204);
}

export const getTotalUsers = async (req,res) =>{
    const pool = await getConnection();
    const result = await pool
    .request()
    .query(queries.getTotalUsers);
    res.json(result.recordset[0][''])
}

export const updateUserById = async (req,res) => {
    const {id} = req.params;
    const { NOME_COMPLETO, NACIONALIDADE, CPF, GENERO, CELULAR, EMAIL, SENHA } = req.body;

    const pool = await getConnection();
    await pool
            .request()
            .input("ID", sql.Int, id)
            .input("NOME_COMPLETO", sql.VarChar, NOME_COMPLETO)
            .input("NACIONALIDADE", sql.VarChar, NACIONALIDADE)
            .input("CPF", sql.VarChar, CPF)
            .input("GENERO", sql.VarChar, GENERO)
            .input("CELULAR", sql.VarChar, CELULAR)
            .input("EMAIL", sql.VarChar, EMAIL)
            .input("SENHA", sql.VarChar, SENHA)
            .query(queries.updateUserById)

    res.json({id,NOME_COMPLETO, NACIONALIDADE, CPF, GENERO, CELULAR, EMAIL, SENHA})
}

export const getLocais = async (req, res) => {
    const pool = await getConnection();
    const result = await pool
    .request()
    .query(querieLocais.getLocais);
    res.json(result.recordset)
}

export const getCodEmpresa = async (req, res) =>{
    const {Numero} = req.params;

    const pool = await getConnection();
    const result = await pool
    .request()
    .input("Numero", Numero)
    .query(querieRetornaCodEmpresa.getCodEmpresa);

    
    res.send(result.recordset[0]);
}

export const getVeiculosByCod = async (req, res) =>{
    const {Cod} = req.params;

    const pool = await getConnection();
    const result = await pool
    .request()
    .input("Cod", Cod)
    .query(querieVeiculos.getVeiculosByCod);

    
    res.send(result.recordsets);
}

export const createNewReservation = async (req, res) => {
    const { userID, idVeiculo, dataDeReserva, horaDeReserva, numero, rua, cidade, modelo, marca, combustivel, transmissao, cor, quilometragem, valorsemanal, imagem, PLACA } = req.body

    if (userID == null) {
        return res.status(400).json({ msg: 'Por favor, preencha todos os campos' })
    }

    // Converter dataDeReserva para o formato esperado pelo SQL Server
    const [dia, mes, ano] = dataDeReserva.split("/");
    const dataDeReservaFormatada = `${ano}-${mes}-${dia}`;

    // const [hora, minuto] = horaDeReserva.split(":");
    // const horaDeReservaFormatada = `${hora}:${minuto}:00`;
    // console.log(horaDeReservaFormatada)




    try {
        const pool = await getConnection();
        await pool
            .request()
            .input("userID", sql.Int, userID)
            .input("idVeiculo", sql.Int, idVeiculo)
            .input("dataDeReserva", sql.Date, dataDeReservaFormatada)
            .input("horaDeReserva", sql.VarChar, horaDeReserva)
            .input("numero", sql.Int, numero)
            .input("rua", sql.VarChar, rua)
            .input("cidade", sql.VarChar, cidade)
            .input("modelo", sql.VarChar, modelo)
            .input("marca", sql.VarChar, marca)
            .input("combustivel", sql.VarChar, combustivel)
            .input("transmissao", sql.VarChar, transmissao)
            .input("cor", sql.VarChar, cor)
            .input("quilometragem", sql.Int, quilometragem)
            .input("valorsemanal", sql.Float, valorsemanal)
            .input("imagem", sql.VarChar, imagem)
            .input("PLACA", sql.VarChar, PLACA)
            
            .query(querieReservas.addReserva)

        res.json({ userID, idVeiculo, dataDeReserva: dataDeReservaFormatada , horaDeReserva, numero, rua, cidade, modelo, marca, combustivel, transmissao, cor, quilometragem, valorsemanal, imagem, PLACA})
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

export const updateDisponivelById = async (req, res) => {
    const { id } = req.params;

    const pool = await getConnection();
    await pool
        .request()
        .input("idVeiculo", sql.Int, id)
        .query(querieVeiculos.updateDisponivel);

    res.json({ id });
}

export const getReservaById = async (req, res) =>{
    const {id} = req.params;

    const pool = await getConnection();
    const result = await pool
    .request()
    .input("ID", id)
    .query(querieReservas.getReservaById);

    
    res.send(result.recordsets[0]);
}

export const deleteReservaById = async (req, res) =>{
    const {reservaID} = req.params;

    const pool = await getConnection();
    const result = await pool
    .request()
    .input("reservaID", reservaID)
    .query(querieReservas.deleteReservaById);

    
    res.sendStatus(204);
}

export const updateDisponivelByPlaca = async (req, res) => {
    const { PLACA } = req.params;

    const pool = await getConnection();
    await pool
        .request()
        .input("PLACA", sql.VarChar, PLACA)
        .query(querieReservas.updateDisponivelByPlaca);

    res.json({ PLACA });
}