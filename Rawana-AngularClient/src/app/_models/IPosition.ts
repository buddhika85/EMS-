import { IBaseModel } from './IBaseModel';


export interface IPosition extends IBaseModel
{
    Id : number;
    JobTitle : string;
    Description : string;
}