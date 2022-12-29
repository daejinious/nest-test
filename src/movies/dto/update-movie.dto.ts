import { PartialType } from '@nestjs/swagger';
import CreateMovieDto from './create-movie.dto';

export default class UpdateMovieDto extends PartialType(CreateMovieDto) {}
