import { UserDto } from '../../Dtos/UserDto';

export interface IUserService {
    Get: (id: string) => UserDto;
    GetAll: () => UserDto[];
    Insert: (user: UserDto) => UserDto;
    Update: (user: UserDto) => UserDto;
    Delete: (id: string) => boolean;
}