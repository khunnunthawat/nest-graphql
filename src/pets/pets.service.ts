import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './pet.entity';

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private petsRepository: Repository<Pet>) {}

  async findAll(): Promise<Pet[]> {
    return this.petsRepository.find(); // SELECT * pet
  }

  // Test http://localhost:3000/graphql
  // async findAll(): Promise<Pet[]> {
  //   const pet = new Pet();
  //   pet.id = 1;
  //   pet.name = 'olympus';

  //   return [pet];
  // }
}
