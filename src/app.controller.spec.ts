import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Transaction } from '@mysten/sui/transactions';

jest.mock('@mysten/sui/transactions');
jest.mock('@mysten/sui/client');
jest.mock('@mysten/sui/keypairs/ed25519');
jest.mock('@mysten/bcs', () => ({
    fromBase64: jest.fn().mockReturnValue(new Uint8Array([0, 1, 2, 3])),
}));

describe('AppController', () => {
  console.log(Transaction);
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
