import express from "express";

const createAdmin = async (data:any) => {
  console.log(data);
  
  return {
    message: "Admin created",
  };
};

export const userServices = {
  createAdmin,
};
