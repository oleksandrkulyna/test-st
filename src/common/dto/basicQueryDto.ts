import {ApiProperty} from '@nestjs/swagger';

export enum OrderType {
    ASC = 'ASC',
    DESC = 'DESC',
}

export class BasicQueryDto {
    @ApiProperty({required: false, type: Number, default: 100})
    limit: number = 100;

    @ApiProperty({required: false, type: Number, default: 0})
    skip: number = 0;

    @ApiProperty({required: false, enum: OrderType, default: OrderType.DESC})
    orderType: OrderType = OrderType.DESC;
}