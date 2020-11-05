import mongoose, { Schema } from 'mongoose';
const CustomerSchema = new Schema({
    customerAddress: {
        address1: { type: String },
        address2: { type: String },
        city: { type: String },
        regionId: { type: String },
        region: { type: String },
        countryId: { type: Number },
        country: { type: String },
        state: { type: String },
    },
    customerContact: {
        email: { type: String },
        phone: { type: String },
        website: { type: String },
        cell: { type: String },
        fax: { type: String },
        position: { type: String }
    },
    customerRelation: {
        isCustomer: { type: Boolean },
        isSupplier: { type: Boolean },
        discount: { type: Number },
        purchaseMinimum: { type: Number },
    }
});
export default mongoose.model('Customers', CustomerSchema);
