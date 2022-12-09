import * as mongoose from 'mongoose';
import LocationTagsModel from '../models/daomodels/LocationTags';
import { CustomLogger } from '../config/Logger'


export class LocationTagsDao {
    private LocationTags = LocationTagsModel;
    constructor() { }
    
    public async GpDelete(LocationTagsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into LocationTagsDao.ts: GpDelete');

    

    
    
    
    this.LocationTags.findByIdAndRemove(LocationTagsId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from LocationTagsDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into LocationTagsDao.ts: GpGetAllValues');

    

    
    
    
    this.LocationTags.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from LocationTagsDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(LocationTagsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into LocationTagsDao.ts: GpCreate');

    let temp = new LocationTagsModel(LocationTagsData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from LocationTagsDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(LocationTagsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into LocationTagsDao.ts: GpUpdate');

    

    
    
    
    this.LocationTags.findOneAndUpdate({ _id: LocationTagsData._id }, LocationTagsData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from LocationTagsDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(LocationTagsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into LocationTagsDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(LocationTagsData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.LocationTags.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from LocationTagsDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchForUpdate(LocationTagsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into LocationTagsDao.ts: GpSearchForUpdate');

    

    
    
    
    this.LocationTags.findOneAndUpdate({ _id: LocationTagsData._id }, LocationTagsData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from LocationTagsDao.ts: GpSearchForUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(LocationTagsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into LocationTagsDao.ts: GpGetNounById');

    

    
    
    
    this.LocationTags.findById(LocationTagsId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from LocationTagsDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearchRelationship(LocationTagsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into LocationTagsDao.ts: GpSearchRelationship');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(LocationTagsData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.LocationTags.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from LocationTagsDao.ts: GpSearchRelationship');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(LocationTagsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into LocationTagsDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.LocationTags.aggregate(([
                        { $match: { $and: [{ created_by: LocationTagsData.created_by }] } }
                    ])).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from LocationTagsDao.ts: GpGetNounCreatedBy');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}