import { Secretaria, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class SecretariaServices {
  constructor() {}

  async listarSecretaria() {
    try {
      const secretaria = await prisma.secretaria.findMany();
      return secretaria;
    } catch (error) {
      console.log(error);
    }
  }

  async criarSecretaria(newSecretaria: Secretaria) {
    try {
      const secretaria = await prisma.secretaria.create({
        data: newSecretaria,
      });
      return secretaria;
    } catch (error) {
      console.log(error);
    }
  }

  async atualizarSecretaria() {}

  async deletarSecretaria(id: string) {
    try {
      const secretaria = await prisma.secretaria.delete({
        where: { id: id },
      });
      return console.log('Secretaria Deletada');
    } catch (error) {
      console.log(error);
    }
  }
}

export default new SecretariaServices();
