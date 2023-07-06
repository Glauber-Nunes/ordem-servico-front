export interface OrdemServico{
    id?:any,
    atendente_id:any,
    situacaoOrdem_id:any
    cliente_id:any,
    descricao:String,
    tecnico_id:any,
    DataDoServico:string | null; // Modificação feita aqui,
    DataFechamento:string | null;
    quantidade:any,
    servico_id:any,
    produto_id:any
    fornecedor_id:any
    observacoes:String,
    statusOrdemServico_id:any,
    valorTotalOrdem:any,
}