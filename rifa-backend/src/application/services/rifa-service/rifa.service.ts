import { RifaEntity } from '@domain/entities/rifa.entity';
import { RifaMapper } from '@infra/data/mappers/rifa.mapper';
import { Injectable } from '@nestjs/common';
import * as crypto from 'node:crypto';

export interface RifaServiceInterface {
  createRifa(input: InputProps): Promise<RifaEntity>;
}

@Injectable()
export class RifaService implements RifaServiceInterface {
  async createRifa(input: InputProps): Promise<RifaEntity> {
    const output = RifaMapper.toDomain(input);

    return output;
  }
}

export type InputProps = {
  rifaId?: string;
  creatorId: string;
  qtdNumbers: number;
  pricePerNumbers: number;
};

export type OutputProps = {
  rifaId: string;
  creatorId: string;
  qtdNumbers: number;
  pricePerNumbers: number;
};
