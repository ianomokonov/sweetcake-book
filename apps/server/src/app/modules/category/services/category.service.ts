import { Injectable } from '@nestjs/common';
import { CategoryEntity } from '@sweetcake/interfaces/category/entities/category.entity';
import { baseException } from '@sweetcake/api/core/base-exception';
import { UpdateCategoryDto } from '@sweetcake/interfaces/category/dtos/update.category.dto';
import { CreateCategoryDto } from '@sweetcake/interfaces/category/dtos/create.category.dto';
import { getRepository } from 'typeorm';
import { dataSource } from '@sweetcake/api/core/data-source';

@Injectable()
export class CategoryService {
  async find(): Promise<CategoryEntity[]> {
    try {
      return await CategoryEntity.find();
    } catch (error) {
      baseException('[CategoryService] find: ', error);
    }
  }

  async findOne(id): Promise<CategoryEntity> {
    try {
      return await CategoryEntity.findOneBy({ id });
    } catch (error) {
      baseException('[CategoryService] findOneBy: ', error);
    }
  }

  async create(category: CreateCategoryDto): Promise<CategoryEntity> {
    try {
      const repo = dataSource.getRepository(CategoryEntity);
      const entity = repo.create({ ...category });
      return await repo.save(entity);
    } catch (error) {
      baseException('[CategoryService] create: ', error);
    }
  }

  async update(id, body: UpdateCategoryDto) {
    try {
      await CategoryEntity.update({ id }, body);
      return {};
    } catch (error) {
      baseException('[CategoryService] update: ', error);
    }
  }

  async delete(id) {
    try {
      await CategoryEntity.delete(id);
      return {};
    } catch (error) {
      baseException('[CategoryService] delete: ', error);
    }
  }
}