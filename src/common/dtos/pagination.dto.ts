import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto {
    
    @IsOptional()
    @IsPositive()
    @Type(() => Number) // Ensure that the value is transformed to a number
    limit?: number;

    @IsOptional()
    @Min(0)
    @Type(() => Number) // Ensure that the value is transformed to a number
    offset?: number;

}