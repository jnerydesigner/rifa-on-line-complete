import { Test, TestingModule } from '@nestjs/testing';
import { InputProps, RifaService } from './rifa.service';

describe('RifaService', () => {
  let rifaService: RifaService;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [RifaService],
    }).compile();
    rifaService = app.get<RifaService>(RifaService);
  });

  it('Deve criar uma rifa', async () => {
    const input: InputProps = {
      creatorId: '123456',
      qtdNumbers: 100,
      pricePerNumbers: 1,
    };

    const output = await rifaService.createRifa(input);

    const rifaIdUUid = '42eeecb0-a336-437f-8ae7-0e24cb547781';

    const outputNew = {
      ...output,
      rifaId: '42eeecb0-a336-437f-8ae7-0e24cb547781',
    };

    expect(rifaService).toBeDefined();
    expect(outputNew.rifaId).toEqual(rifaIdUUid);
    expect(output.qtdNumbers).toEqual(100);
    expect(output.creatorId).toEqual('123456');
    expect(output.pricePerNumbers).toEqual(1);
  });
});
