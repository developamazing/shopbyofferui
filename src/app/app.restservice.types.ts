export interface MarketersResponse {
  resultList: iMarketer[];
  paginator: string;
  responseCode: number;
  responseMessage: string; 
}

export interface SuppliersResponse {
  resultList: iSupplier[];
  paginator: string;
  responseCode: number;
  responseMessage: string; 
}

export interface ConsumerOffersResponse {
  resultList: iConsumerOffer[];
  paginator: string;
  responseCode: number;
  responseMessage: string; 
}

export interface iMarketer {
  id: string;
  domain: string;
  name: string;
  marketertype: string; 
  currency: string;
  description: string;
  createdDate: string;
  createdBy: string;
  updatedBy: string;
  updatedDate: string;
  active:boolean;
}

export interface iProduct {
    id: number;
    manufacturer: string;
    name:string;
    ean: string;
    gtin: string;
    description: string;
    uom: string;
    createdBy: string;
    createdDate: string;
    updatedBy: string;
    updatedDate: string;
    isActive: boolean;
}

export interface iOfferStatus {
    id: number;
    status: string;
    description: string;
}

export interface iSupplier {
  id: string;
  domain: string;
  name: string;
  priority: number;
  suplierType: string; 
  currency: string;
  createdDate: string;
  createdBy: string;
  updatedBy: string;
  updatedDate: string;
  isActive:boolean;
  parentSupplierName:string;
}

export interface iConsumerOffer {
  id: number;
  offerredDate: string;
  quantity: number;
  offerBundleId: string; 
  maxPrice: number;
  endDate: string;
  createdDate: string;
  createdBy: string;
  updatedBy: string;
  updatedDate: string;
  current:boolean;
  coconsumerKeyId:iConsumer;
  compkeyId:iMarketerProduct;
  coofferStatusKeyId: iOfferStatus;
}

export interface iConsumer {
  id:number;
  handle:string;
  email:string;
  firstName:string;
  middleName:string;
  lastName:string;
  phone:string;
  createdBy:string;
  createdDate:string;
  updatedBy:string;
  updatedDate:string;
  isActive:true;
  cmarketerKeyId:iMarketer;
}

export interface iMarketerProduct{
    id: number;
    price: number;
    currency: string;
    sku:string;
    createdBy: string;
    createdDate: string;
    updatedBy: string;
    updatedDate: string;
    isActive: boolean;
    mpmarketerKeyId:iMarketer;
    mpproductKeyId: iProduct;
    
}
