import { Agenda } from '@prisma/client';
import { Request, Response } from 'express';
import AgendaServices from '../services/AgendaServices';

class AgendaController {
  constructor() {}

  async listarAgenda(req: Request, res: Response) {
    const agenda = await AgendaServices.listarAgenda();
    return res.status(200).json({
      status: 'ok',
      agenda: agenda,
    });
  }
  async atualizarAgenda(req: Request, res: Response) {
    return res.send('Atualizar Agenda');
  }
  async criarAgenda(req: Request, res: Response) {
    return res.send('Criar Agenda');
  }
  async deletarAgenda(req: Request, res: Response) {
    return res.send('Deletar Agenda');
  }
}

export default new AgendaController();
