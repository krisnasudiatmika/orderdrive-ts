type ID = number;
type Timestamp = number; // ie: Date.now()
type GeoId = string;
type Image = string; //base64
type MoneyValue = string;
type JSONData = string


export interface Country {
	id: GeoId,
	iso: string,
	name: string,
}

export interface Region {
	id: GeoId,
	iso: string,
	name: string,
	countryId: number,
	country: Country,
}

export interface TaxRate {
	code: string,
	rate: number,
	regionId: GeoId,
	countryId: GeoId,
}

export interface Address {
	address1: string,
	address2: string,
	city: string, // cityId: GeoId, city: City,
	regionId: GeoId,
	region: Region,
	countryId: GeoId,
    country: Country,
    state :string,
    postal: string
}

export interface ContactInfo {
	email: string,
	phone: string,
    website: string,
    cell: string,
	fax: string,
	position: string,
}


export interface Company {
	id: ID,
	name: string,
	purchaseMinimum: number,
	language: string,
	isActive: boolean,
	logo: Image,
	tax1Number: string,
	tax2Number: string,
	// has many...
	companyLocations: CompanyLocation[],
	companyContacts: CompanyContact[],
	companyProducts: CompanyProduct[],
	address: Address,
	
	
}
export interface CompanyLocation {
	id: ID,
	name: string,
	canSell: boolean,
	canPurchase: boolean,
	// belongs to...
	companyId: ID,
	company: Company,
	// has many...
	//companyContacts: CompanyContact[],
}
export interface CompanyContact {
	id: ID,
	name: string,
	// belongs to...
	companyId: ID,
	company: Company,
	//companyLocationId: ID,
	//companyLocation: CompanyLocation,
	//user: User,
}

export interface CompanyProduct {
	sku: string,
	salePrice: number,
	purchasePrice: number,
	inventoryQuantity: number,
	canSell: boolean,
	canPurchase: boolean,
	// belongs to...
	companyId: ID,
	company: Company,
	productId: ID,
	
}

export interface CompanyRelation { // CompanyFavorite ?
	isCustomer: boolean, // ???
	isSupplier: boolean, // ???
	discount: number, // ???
	purchaseMinimum: number, // ???
}





