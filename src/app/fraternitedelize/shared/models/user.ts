import * as moment from 'moment';

export class User {
    bornDate: string;
    cpf: string;
    email: string;
    genre: string;
    name: string;
    phone: string;
    lastGetPoints = moment().format('DD MM YYYY');
    points: number = 10;
}