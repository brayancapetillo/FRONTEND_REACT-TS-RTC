import { Client } from "../../interfaces/global/clients/client.interface";

export const ClientService = {
  getClientsData(): Client[] {
    return [];
  },

  //   getProductsMini() {
  //     return Promise.resolve(this.getProductsData().slice(0, 5));
  //   },

  //   getProductsSmall() {
  //     return Promise.resolve(this.getProductsData().slice(0, 10));
  //   },

  //   getProducts() {
  //     return Promise.resolve(this.getProductsData());
  //   },

  getBestClients(total: number): Promise<Client[]> {
    return Promise.resolve(
      this.getClientsData()
        .sort((a: Client, b: Client) => b.Score - a.Score)
        .slice(0, total),
    );
  },
};
