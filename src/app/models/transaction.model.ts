export interface Transaction {
    id: number;

    clientId: number;

    type: string;

    amount: number;

    LocalDateTime: Date;
}