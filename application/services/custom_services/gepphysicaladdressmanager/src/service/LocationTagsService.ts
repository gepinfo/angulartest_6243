import { Request, Response } from 'express';
import {LocationTagsDao} from '../dao/LocationTagsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let LocationTags = new LocationTagsDao();

export class LocationTagsService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into LocationTagsService.ts: GpDelete')
     let  LocationTagsId = req.params.id;
     LocationTags.GpDelete(LocationTagsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from LocationTagsService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into LocationTagsService.ts: GpGetAllValues')
     
     LocationTags.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from LocationTagsService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into LocationTagsService.ts: GpCreate')
     let  LocationTagsData = req.body;
     LocationTags.GpCreate(LocationTagsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from LocationTagsService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into LocationTagsService.ts: GpUpdate')
     let  LocationTagsData = req.body;
     LocationTags.GpUpdate(LocationTagsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from LocationTagsService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into LocationTagsService.ts: GpSearch')
     let  LocationTagsData = req.query;
     LocationTags.GpSearch(LocationTagsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from LocationTagsService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into LocationTagsService.ts: GpSearchForUpdate')
     let  LocationTagsData = req.body;
     LocationTags.GpSearchForUpdate(LocationTagsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from LocationTagsService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into LocationTagsService.ts: GpGetNounById')
     let  LocationTagsId = req.params.id;
     LocationTags.GpGetNounById(LocationTagsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from LocationTagsService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpSearchRelationship(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into LocationTagsService.ts: GpSearchRelationship')
     let  LocationTagsData = req.query;
     LocationTags.GpSearchRelationship(LocationTagsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from LocationTagsService.ts: GpSearchRelationship')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into LocationTagsService.ts: GpGetNounCreatedBy')
     let  LocationTagsData = { created_by: req.query.createdby };
     LocationTags.GpGetNounCreatedBy(LocationTagsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from LocationTagsService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}