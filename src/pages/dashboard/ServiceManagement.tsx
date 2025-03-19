/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  deleteServices,
  getServices,
  // updateServices,
} from "@/api/admin/service/service.api";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { useUpdateService } from "@/hooks/useAddService";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const ServiceManagement = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["services"],
    queryFn: getServices,
  });
  if (isLoading) {
    return <p>...Loading</p>;
  }
  console.log({ isError, data });
  if (isError) {
    return <p>Something went wrong</p>;
  }
  console.log(data);

  const handleDeleteServices = async (id: string) => {
    await deleteServices(id);
    queryClient.invalidateQueries({ queryKey: ["services"] });
  };

  // const mutation = useMutation(updateServices)
  const handleUpdateServices = async (item: any) => {
    console.log(item);
    const id = item._id;
    const updateData = {
      serviceName: item.serviceName,
      serviceImage: item.serviceImage,
      services: item.services,
    };
    return { id, updateData };
  };

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">SL NO.</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Facilities</TableHead>
          <TableHead>Update</TableHead>
          <TableHead>Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.data?.map((item: any, index: number) => (
          <TableRow key={item._id}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{item.serviceName}</TableCell>
            <TableCell>{item.serviceImage}</TableCell>
            {/* <TableCell>{item.paymentMethod}</TableCell> */}
            <TableCell>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="flex justify-center items-center h-8 w-8 md:w-12 md:h-12 rounded-full bg-[#FE8900] bg-opacity-20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="#FE8900"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                      />
                    </svg>
                  </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor={item.serviceName} className="text-right">
                        Service Name
                      </label>
                      <input
                        id={item._id}
                        defaultValue={item.serviceName}
                        className="col-span-3"
                      />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <label htmlFor={item._id} className="text-right">
                        Image Url
                      </label>
                      <input
                        id={item._id}
                        defaultValue={item.serviceImage}
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button
                      onClick={() => handleUpdateServices(item)}
                      type="submit"
                    >
                      Save changes
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </TableCell>
            <TableCell>
              <div
                onClick={() => handleDeleteServices(item._id)}
                className="flex justify-center items-center h-8 w-8 md:w-12 md:h-12 rounded-full bg-[#E54545] bg-opacity-20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#E54545"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <Button className="mt-5">
        <a href="/dashboard/add-service">Add Services</a>
      </Button>
    </Table>
  );
};

export default ServiceManagement;
