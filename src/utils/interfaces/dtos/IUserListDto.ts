import ISupport from '../ISupport';
import IUser from '../IUsers';

interface IUserListDto {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUser[];
  support: ISupport;
}

export default IUserListDto;
