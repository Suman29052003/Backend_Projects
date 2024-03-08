const asyncHandler = require('express-async-handler')
// @desc get all contacts
// @route GET /api/contacts
// @access Public

const getContacts = asyncHandler(async(req,res)=>{
    res.status(200).json({message : "Get all the messages"})
});

// @desc Create New  Contact
// @route POST /api/contacts
// @access Public

const createContact = asyncHandler(async(req,res)=>{
    console.log("The Request Body :", req.body);
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory") ;
    }
    res.status(201).json({message : "Create Contact"})
});

// @desc Get  Contact
// @route GET /api/contacts/:id
// @access Public

const getContact = asyncHandler(async(req,res)=>{
    res.status(200).json({message : `Get Contact for ${req.params.id}`})
});

// @desc put  Contact
// @route PUT /api/contacts/:id
// @access Public 

const putContact = asyncHandler(async(req,res)=>{
    res.status(200).json({message : `Update Contact for ${req.params.id}`})
});

// @desc delete  Contact
// @route DELETE /api/contacts/:id
// @access Public

const deleteContact = asyncHandler(async(req,res)=>{
    res.status(200).json({message : `Delete Contact for ${req.params.id}`})
});



module.exports = {getContacts,createContact,getContact,putContact,deleteContact} ;