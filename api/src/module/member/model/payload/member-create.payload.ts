import { IsArray, IsBoolean, IsDate, IsEmail, IsEnum, IsOptional, IsString, Length } from 'class-validator';
import { Gender } from '../enum';
import { MemberSubscription } from '../entity';
import { Address } from '@common/model';
import { ApiProperty } from '@nestjs/swagger';

export class MemberCreatePayload {
  @ApiProperty()
  @IsString()
  @IsOptional()
  @Length(1, 50)
  firstname: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @Length(1, 50)
  lastname: string;

  @ApiProperty()
  @IsDate()
  @IsOptional()
  birthdate: Date;

  @ApiProperty()
  @IsEnum(Gender)
  @IsOptional()
  gender: Gender;

  @ApiProperty()
  @IsEmail()
  @IsOptional()
  @Length(1, 50)
  mail: string;

  @ApiProperty()
  @IsOptional()
  @Length(1, 50)
  phone: string;

  @ApiProperty()
  @IsOptional()
  @Length(1, 34)
  iban: string;

  @ApiProperty()
  @IsOptional()
  @Length(1, 10)
  code_activation: string;

  @IsOptional()
  @IsArray()
  subscriptions: MemberSubscription[];

  @ApiProperty()
  @IsOptional()
  address: Address

  @IsOptional()
  @IsBoolean()
  active: boolean
}