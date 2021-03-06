export interface SO extends SSO {}

export interface SSO {
    [key:string]: | OT | AO | AS 
    route : any
    app? : any
}

export interface OT { 
    [key:string] : string | boolean | number
 }

export type Types = | boolean | string | number

export interface AS extends Array<Types> {}

export interface AO extends Array<OT | Types>{}
