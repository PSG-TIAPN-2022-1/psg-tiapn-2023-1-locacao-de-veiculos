
export const queries = {
    getAllUsers: 'SELECT * FROM USUARIOS',
    addNewUser: 'INSERT INTO USUARIOS (NOME_COMPLETO,NACIONALIDADE,CPF,GENERO,CELULAR,EMAIL,SENHA) VALUES (@NOME_COMPLETO,@NACIONALIDADE,@CPF,@GENERO,@CELULAR,@EMAIL,@SENHA)',
    getUserbyId: 'SELECT * FROM USUARIOS WHERE ID = @id',
    deleteUserById : 'DELETE FROM USUARIOS WHERE ID = @id',
    getTotalUsers : 'SELECT COUNT(*) FROM USUARIOS',
    updateUserById : 'UPDATE USUARIOS SET NOME_COMPLETO = @NOME_COMPLETO, NACIONALIDADE = @NACIONALIDADE, CPF = @CPF, GENERO = @GENERO, CELULAR = @CELULAR, EMAIL=@EMAIL, SENHA = @SENHA WHERE ID = @id'

}

export const querieLocais = {
    getLocais: 'SELECT * FROM LOCAIS'
}

export const querieRetornaCodEmpresa = {
    getCodEmpresa: 'SELECT Cod_empresa FROM LOCAIS WHERE Numero = @Numero'
}

export const querieVeiculos = {
    getVeiculosByCod:'SELECT PLACA,ID,MODELO,MARCA,QUILOMETRAGEM,COMBUSTIVEL,TRANSMISSAO,COR,IMAGEM_LINK,VALOR,ValorSemanal FROM VEICULOS WHERE Cod_empresa = @Cod AND DISPONIVEL = 1',

    updateDisponivel : 'UPDATE VEICULOS SET DISPONIVEL = 0 WHERE ID = @idVeiculo'
}


export const querieReservas = {
    addReserva : 'INSERT INTO RESERVAS (userID, idVeiculo, dataDeReserva, horaDeReserva, numero, rua, cidade, modelo, marca, combustivel, transmissao, cor, quilometragem, valorsemanal, imagem, PLACA) VALUES (@userID, @idVeiculo, @dataDeReserva, @horaDeReserva, @numero, @rua, @cidade, @modelo, @marca, @combustivel, @transmissao, @cor, @quilometragem, @valorsemanal, @imagem, @PLACA)',

    getReservaById : 'SELECT reservaID ,userID,dataDeReserva,horaDeReserva,numero ,rua,cidade,modelo,marca,combustivel,transmissao,cor,quilometragem,valorsemanal ,imagem, PLACA FROM RESERVAS WHERE userID = @id',

    deleteReservaById : 'DELETE FROM RESERVAS WHERE reservaID = @reservaID ',

    updateDisponivelByPlaca : 'UPDATE VEICULOS SET DISPONIVEL = 1 WHERE PLACA = @PLACA'

    
}