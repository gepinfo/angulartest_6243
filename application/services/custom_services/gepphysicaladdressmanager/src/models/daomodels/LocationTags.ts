
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const LocationTagsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   latitude: String,
   longitude: String,
   geoname: String
})

const LocationTagsModel = mongoose.model('LocationTags', LocationTagsSchema, 'LocationTags');
export default LocationTagsModel;
