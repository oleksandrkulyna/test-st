import {ApiProperty} from '@nestjs/swagger';
import {Transform} from 'class-transformer';

export enum OrderType {
    ASC = 'ASC',
    DESC = 'DESC',
}

export class BasicQueryDto {
    @ApiProperty({required: false, type: Number, default: 100})
    // @Transform(limit => {
    //     limit = Number(limit);
    //     if (isNaN(limit)) {
    //         return limit = 100;
    //     }
    //     return limit;
    // })
    limit: number = 100;

    @ApiProperty({required: false, type: Number, default: 0})
    // @Transform(offset => {
    //     offset = Number(offset);
    //     if (isNaN(offset)) {
    //         return offset = 0;
    //     }
    //     return offset;
    // })
    skip: number = 0;

    @ApiProperty({required: false, enum: OrderType, default: OrderType.DESC})
    // @Transform(orderBy => {
    //     return orderBy as OrderType;
    // })
    orderType: OrderType = OrderType.DESC;
}