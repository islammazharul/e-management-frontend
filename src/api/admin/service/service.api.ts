/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const getServices = async () => {
  return await axios.get("http://localhost:5000/services");
};
export const addServices = async (data: any) => {
  return await axios.post("http://localhost:5000/services", data);
};
export const updateServices = async ({ id, updateData }: any) => {
  return await axios.put(`http://localhost:5000/services/${id}`, updateData);
};
export const deleteServices = async (id: string) => {
  return await axios.delete(`http://localhost:5000/services/${id}`);
};
