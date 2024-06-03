import { Transaction } from "./transaction.model";

export interface Extract {
    transactions: Array<Transaction>;

    total: number;
}