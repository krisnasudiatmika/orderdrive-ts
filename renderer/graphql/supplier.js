import mongoose, { Schema } from 'mongoose';
const SupplierSchema = new Schema({
    supplierName: { type: String, required: true },
    supplierContact: {
        email: { type: String },
        phone: { type: String },
        website: { type: String },
        cell: { type: String },
        fax: { type: String },
        position: { type: String }
    },
    paymentContact: {
        email: { type: String },
        phone: { type: String },
        website: { type: String },
        cell: { type: String },
        fax: { type: String },
        position: { type: String }
    },
    bankName: { type: String },
    accoutNumber: { type: Number },
    company: { type: Schema.Types.ObjectId, required: true },
    address: {
        address1: { type: String },
        address2: { type: String },
        city: { type: String },
        regionId: { type: String },
        region: { type: String },
        countryId: { type: Number },
        country: { type: String },
        state: { type: String },
    },
    zone: { type: String }
});
export default mongoose.model('Suppliers', SupplierSchema);
