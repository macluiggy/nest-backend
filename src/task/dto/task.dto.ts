import { IsBoolean, IsNotEmpty, IsString, MinLength, isString } from "class-validator";

export class TaskDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  readonly description: string;
  @IsNotEmpty()
  @IsBoolean()
  readonly isDone: boolean;
}
