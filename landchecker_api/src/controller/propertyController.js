import { createPropertyService, deletePropertyService, getAllPropertyService, getPropertyByIdService, updatePropertyService } from "../models/propertyModel.js";

// Standardized response function

const handleResponse = (res, status, message, data = null ) => {
    res.status(status).json({
        status, 
        message, 
        data,
    });
};

export const createProperty = async (req, res, next) => {
   const { nameOfProperty, numberOfBeds, price, propertyType } = req.body;
   try {
     const newProperty = await createPropertyService(nameOfProperty, numberOfBeds, price, propertyType);
     handleResponse(res, 201, "Property created successfully", newProperty);
   } catch (error) {
     next(error);
   }
    

}

export const getAllProperty = async (req, res, next) => {
   try {
     const properties = await getAllPropertyService();
     handleResponse(res, 200, "Properties retrieved successfully", properties);
   } catch (error) {
     next(error);
   }
    

}


export const getPropertyById = async (req, res, next) => {
   const { id } = req.params;
   try {
     const property = await getPropertyByIdService(id);
     if (!property) {
       return handleResponse(res, 404, "Property not found");
     }
     handleResponse(res, 200, "Property retrieved successfully", property);
   } catch (error) {
     next(error);
   }
    

}


export const updateProperty = async (req, res, next) => {
   const { id } = req.params;
   const { nameOfProperty, numberOfBeds, price, propertyType } = req.body;
   try {
     const property = await getPropertyByIdService(id);
     if (!property) {
       return handleResponse(res, 404, "Property not found");
     }
     const updatedProperty = await updatePropertyService(id, { name, email });
     handleResponse(res, 200, "Property updated successfully", updatedProperty);
   } catch (error) {
     next(error);
   }
    

}


export const deleteProperty = async (req, res, next) => {
   const { id } = req.params;
   try {
     const property = await getPropertyByIdService(id);
     if (!property) {
       return handleResponse(res, 404, "Property not found");
     }
     const deletedProperty = await deletePropertyService(id);
     handleResponse(res, 200, "Property deleted successfully", deletedProperty);
   } catch (error) {
     next(error);
   }
    

}