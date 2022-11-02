import { IsDefined } from 'class-validator';
import { baseDtoMessage } from '../../../const/base-dto-message';

export class CreateCakeDto {
  @IsDefined(baseDtoMessage)
  name: string;

  @IsDefined(baseDtoMessage)
  price: string;
}