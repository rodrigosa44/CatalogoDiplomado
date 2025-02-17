import { ApiProduct } from "./api-product.model";

export interface ApiResponse{
    total : number;
    skip : number;
    limit : number;
    products: ApiProduct[];
}