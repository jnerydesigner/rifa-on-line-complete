import * as crypto from 'node:crypto';

export type RifaType = {
  rifaId?: string;
  creatorId: string;
  qtdNumbers: number;
  pricePerNumbers: number;
};

export class RifaEntity {
  constructor(private rifaType: RifaType) {}

  get rifaId(): string {
    return this.rifaType.rifaId;
  }

  set rifaId(rifaId: string) {
    this.rifaType.rifaId = rifaId;
  }

  get creatorId(): string {
    return this.rifaType.creatorId;
  }

  set creatorId(creatorId: string) {
    this.rifaType.creatorId = creatorId;
  }

  get qtdNumbers(): number {
    return this.rifaType.qtdNumbers;
  }

  set qtdNumbers(qtdNumbers: number) {
    this.rifaType.qtdNumbers = qtdNumbers;
  }

  get pricePerNumbers(): number {
    return this.rifaType.pricePerNumbers;
  }

  set pricePerNumbers(pricePerNumbers: number) {
    this.rifaType.pricePerNumbers = pricePerNumbers;
  }

  static createRifa(rifaType: RifaType): RifaEntity {
    const rifaId = !rifaType.rifaId ? crypto.randomUUID() : rifaType.rifaId;

    return new RifaEntity({ ...rifaType, rifaId });
  }
}
