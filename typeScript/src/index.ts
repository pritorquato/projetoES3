import dotenv from "dotenv";
import express from "express";
import { AddressInfo } from "net";
import {fornecedorRouter} from "./Router/FornecedorRouter";
import {consultasRouter} from "./Router/ConsultasRouter";
import {productsRouter} from "./Router/ProductsRouter";
import {enderecoRouter} from "./Router/EnderecoRouter";



dotenv.config();
const app = express();
app.use(express.json());


async function main():Promise<void>{

  app.use("/user", fornecedorRouter);
  app.use("/consultas", consultasRouter);
  app.use("/produtos",productsRouter);
  app.use("/endereco",enderecoRouter);

}
main()

const server = app.listen(3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});
