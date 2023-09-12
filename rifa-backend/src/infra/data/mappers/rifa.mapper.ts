import { RifaEntity, RifaType } from '@domain/entities/rifa.entity';

export class RifaMapper {
  static toDomain(rifa: RifaType): RifaEntity {
    const rifaEntity = RifaEntity.createRifa({
      rifaId: rifa.rifaId,
      creatorId: rifa.creatorId,
      pricePerNumbers: rifa.pricePerNumbers,
      qtdNumbers: rifa.qtdNumbers,
    });

    return rifaEntity;
  }
}
