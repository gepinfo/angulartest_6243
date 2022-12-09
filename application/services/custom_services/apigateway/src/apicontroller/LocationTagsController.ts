import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdapter }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class LocationTagsController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.delete('/LocationTags/:id', this.GpDelete);
this.router.get('/LocationTags', this.GpGetAllValues);
this.router.post('/LocationTags', this.GpCreate);
this.router.put('/LocationTags', this.GpUpdate);
this.router.get('/LocationTags/get/search', this.GpSearch);
this.router.put('/LocationTags/get/update', this.GpSearchForUpdate);
this.router.get('/LocationTags/:id', this.GpGetNounById);
this.router.get('/LocationTags/userid/created_by', this.GpGetNounCreatedBy);
        //#@gepdelimeterone@#
    }

public GpDelete(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into LocationTagsController.ts: GpDelete');
        new ApiAdapter().delete(Constant.GEPPHYSICALADDRESSMANAGERURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from LocationTagsController.ts: GpDelete');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into LocationTagsController.ts: GpGetAllValues');
        new ApiAdapter().get(Constant.GEPPHYSICALADDRESSMANAGERURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from LocationTagsController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into LocationTagsController.ts: GpCreate');
        new ApiAdapter().post(Constant.GEPPHYSICALADDRESSMANAGERURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from LocationTagsController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into LocationTagsController.ts: GpUpdate');
        new ApiAdapter().put(Constant.GEPPHYSICALADDRESSMANAGERURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from LocationTagsController.ts: GpUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearch(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into LocationTagsController.ts: GpSearch');
        new ApiAdapter().get(Constant.GEPPHYSICALADDRESSMANAGERURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from LocationTagsController.ts: GpSearch');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearchForUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into LocationTagsController.ts: GpSearchForUpdate');
        new ApiAdapter().put(Constant.GEPPHYSICALADDRESSMANAGERURL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from LocationTagsController.ts: GpSearchForUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetNounById(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into LocationTagsController.ts: GpGetNounById');
        new ApiAdapter().get(Constant.GEPPHYSICALADDRESSMANAGERURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from LocationTagsController.ts: GpGetNounById');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetNounCreatedBy(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into LocationTagsController.ts: GpGetNounCreatedBy');
        new ApiAdapter().get(Constant.GEPPHYSICALADDRESSMANAGERURL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/web' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from LocationTagsController.ts: GpGetNounCreatedBy');
        }).catch(err => {
            res.send(err);
        });
    }

    //#@gepdelimeter@#








}

