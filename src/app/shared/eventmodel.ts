export interface Ievent{
id:number;
name:string;
date:Date;
time:string;
price:string;
imageUrl:string;
location?:{
    address:string,
    city:string,
    country:string
};
onlineUrl?:string;
sessions?:Isession[];

}
export interface Isession{
    id:number;
    name:String;
    presenter:string;
    duration:number;
    level:string;
    abstract:string;
    voters:string[]

}