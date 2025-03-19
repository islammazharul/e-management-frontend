import SectionTitle from "@/components/SectionTitle";
import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { addServices } from "@/api/admin/service/service.api";

type Inputs = {
  serviceName: string;
  serviceImage: string;
  services: string;
};

const AddServiceForm = () => {
  // const { register, handleSubmit, reset } = useForm<Inputs>();
  const [serviceName, setServiceName] = useState("");
  const [serviceImage, setServiceImage] = useState("");
  const [services, setServices] = useState("");

  const { mutateAsync } = useMutation({
    mutationFn: addServices,
  });
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const data: Inputs = {
      serviceName: serviceName,
      serviceImage: serviceImage,
      services: services,
    };
    await mutateAsync(data);
    console.log(data);
  };

  return (
    <div className="w-full px-10">
      <SectionTitle heading="Add an Service"></SectionTitle>
      <div className="lg:w-9/12 mx-auto text-start bg-green-500 p-5">
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Service Name</span>
            </label>
            <input
              type="text"
              placeholder="Service Name"
              onChange={(e) => setServiceName(e.target.value)}
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Image Url</span>
            </label>
            <input
              type="text"
              placeholder="Enter Image Url"
              onChange={(e) => setServiceImage(e.target.value)}
              className="file-input file-input-bordered w-full "
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Services</span>
            </label>
            <input
              type="text"
              placeholder="Added services"
              onChange={(e) => setServices(e.target.value)}
              className="input input-bordered w-full "
            />
          </div>

          <div className="flex justify-center">
            <input
              className="btn btn-md bg-yellow-500 border-0 mt-4"
              type="submit"
              value="Add Service"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServiceForm;
