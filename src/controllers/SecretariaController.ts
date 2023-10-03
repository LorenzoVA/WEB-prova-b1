import { Secretaria } from '@prisma/client';
import { Request, Response } from 'express';
import SecretariaServices from '../services/SecretariaServices';

class SecretariaController {
  constructor() {}

  async listarSecretaria(req: Request, res: Response) {
    const secretaria = await SecretariaServices.listarSecretaria();
    return res.status(200).json({
      status: 'ok',
      secretaria: secretaria,
    });
  }
  async atualizarSecretaria(req: Request, res: Response) {
    return res.send('Atualizar Secretaria');
  }
  async criarSecretaria(req: Request, res: Response) {
    return res.send('Criar Secretaria');
  }
  async deletarSecretaria(req: Request, res: Response) {
    return res.send('Deletar Secretaria');
  }
}

export default new SecretariaController();
