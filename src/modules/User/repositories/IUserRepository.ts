import { IUserCreateDto } from '../dtos/IUserCreateDto';

// New repository change
export interface IUserRepository {
  createUser(data: IUserCreateDto): Promise<void>;
  getUser(): Promise<IUserCreateDto[]>;
}
