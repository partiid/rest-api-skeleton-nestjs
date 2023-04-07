import { Injectable } from '@nestjs/common';
import { ServiceInterface } from 'src/interfaces/service.interface';
import { PrismaService } from 'src/prisma.service';
import {User, Prisma, PrismaClient} from '@prisma/client';

@Injectable()
export class UserService implements ServiceInterface<User> {

    constructor(private prismaService: PrismaService) { }
    
    async findAll(): Promise<User[]> {
        return this.prismaService.user.findMany();
    }
    
    async findOne(where: Prisma.UserWhereInput): Promise<User | null> {
        return this.prismaService.user.findFirst({
            where
        }); 

    }
    
    async create(data: Prisma.UserCreateInput): Promise<User> {
        return  this.prismaService.user.create({
            data,
        });
    }
    
    async update(params: {
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
    }): Promise<any> {
        const {where, data} = params;
        return this.prismaService.user.update({
            where,
            data,
        });
    }
    
    async delete(where: Prisma.UserWhereUniqueInput): Promise<User> {
        return this.prismaService.user.delete({
            where,
        })
    }

    



}
