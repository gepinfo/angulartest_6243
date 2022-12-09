import { Request, Response, NextFunction } from "express";
import { LocationTagsController } from '../controller/LocationTagsController';


export class Routes {
    private LocationTags: LocationTagsController = new LocationTagsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/LocationTags/:id').delete(this.LocationTags.GpDelete);
app.route('/LocationTags').get(this.LocationTags.GpGetAllValues);
app.route('/LocationTags').post(this.LocationTags.GpCreate);
app.route('/LocationTags').put(this.LocationTags.GpUpdate);
app.route('/LocationTags/get/search').get(this.LocationTags.GpSearch);
app.route('/LocationTags/get/update').put(this.LocationTags.GpSearchForUpdate);
app.route('/LocationTags/:id').get(this.LocationTags.GpGetNounById);
app.route('/LocationTags/get/searchrelationship').get(this.LocationTags.GpSearchRelationship);
app.route('/LocationTags/userid/created_by').get(this.LocationTags.GpGetNounCreatedBy);
     }

}