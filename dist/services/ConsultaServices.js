"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class ConsultaServices {
    constructor() { }
    async listarConsulta() {
        try {
            const consultas = await prisma.consulta.findMany();
            return consultas;
        }
        catch (error) {
            console.log(error);
        }
    }
    async criarConsulta(newConsulta) {
        try {
            const consulta = await prisma.consulta.create({
                data: newConsulta,
            });
            return consulta;
        }
        catch (error) {
            console.log(error);
        }
    }
    async atualizarConsulta(id, nome_paciente, nome_dents, id_paciente, id_agenda, id_consulta) {
        try {
            const consulta = await prisma.consulta.update({
                where: { id: id },
                data: {
                    nome_paciente: nome_paciente,
                    nome_dents: nome_dents,
                    id_paciente: id_paciente,
                    id_agenda: id_agenda,
                    id_consulta: id_consulta,
                },
            });
            return consulta;
        }
        catch (error) {
            console.log(error);
        }
    }
    async deletarConsulta(id) {
        try {
            const consulta = await prisma.consulta.delete({
                where: { id: id },
            });
            return console.log('consulta Deletada');
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.default = new ConsultaServices();
