export interface OSFinalizaServico{
    id?:any,
    atendente:any,
    situacaoOrdem:any
    cliente:any,
    descricao:String,
    tecnico:any,
    DataDoServico:string | null; // Modificação feita aqui,
    DataFechamento:string | null;
    quantidade:any,
    servico:any,
    produto:any
    fornecedor:any
    observacoes:String,
    statusOrdemServico:any,
    valorTotalOrdem:any,
}


