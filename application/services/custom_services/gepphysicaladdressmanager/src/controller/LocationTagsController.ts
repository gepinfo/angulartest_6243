import { Request, Response } from 'express';
import { LocationTagsService } from '../service/LocationTagsService';
import { CustomLogger } from '../config/Logger'
let LocationTags = new LocationTagsService();

export class LocationTagsController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    LocationTags.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into LocationTagsController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from LocationTagsController.ts: GpDelete');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    LocationTags.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into LocationTagsController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from LocationTagsController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    LocationTags.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into LocationTagsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from LocationTagsController.ts: GpCreate');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    LocationTags.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into LocationTagsController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from LocationTagsController.ts: GpUpdate');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    LocationTags.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into LocationTagsController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from LocationTagsController.ts: GpSearch');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    LocationTags.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into LocationTagsController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from LocationTagsController.ts: GpSearchForUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    LocationTags.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into LocationTagsController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from LocationTagsController.ts: GpGetNounById');
    })}
public GpSearchRelationship(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    LocationTags.GpSearchRelationship(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into LocationTagsController.ts: GpSearchRelationship');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from LocationTagsController.ts: GpSearchRelationship');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    LocationTags.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into LocationTagsController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from LocationTagsController.ts: GpGetNounCreatedBy');
    })}


}