db.produtos.find({ vendidos: 137 }, {
    nome: true,
    vendidos: true, 
    _id: false });