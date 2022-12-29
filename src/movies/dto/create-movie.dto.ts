import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export default class CreateMovieDto {
  @IsString()
  @ApiProperty()
  readonly title: string;

  @IsNumber()
  @ApiProperty()
  readonly year: number;

  @IsOptional()
  @IsString({ each: true })
  @ApiProperty()
  readonly genres: string[];
}
