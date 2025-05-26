import { Avatar, Divider, Modal } from "antd";
import { RiCloseLargeLine } from "react-icons/ri";

type TPropsType = {
  open: boolean;
  setOpen: (collapsed: boolean) => void;
};

const EarningDetailsModal = ({ open, setOpen }: TPropsType) => {
  return (
    <Modal
      open={open}
      footer={null}
      centered={true}
      onCancel={() => setOpen(false)}
      closeIcon={false}
      style={{
        minWidth: "max-content",
        position: "relative",
        backgroundColor: "#000",
      }}
    >
      <div className="pb-20 ">
        <div className="flex justify-between items-center">
          <h4 className="text-center text-xl font-medium text-[#333s]">
            User Details
          </h4>
          <div
            className="w-10 h-10 bg-main-color  rounded-full flex justify-center items-center cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <RiCloseLargeLine size={18} color="#fff" className="" />
          </div>
        </div>
        <div className="w-fit mx-auto relative">
          <Avatar src="/user_image1.png" size={120} />
          <div className="bg-green-600 absolute size-3 bottom-5 right-3 rounded-full border-2"></div>
        </div>
        <div className="mt-10 space-y-4">
          <div className="flex justify-between">
            <h4>User name :</h4>
            <p className="font-medium">James Tracy</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <h4>Email :</h4>
            <p className="font-medium">muskantanaz@gmail.com</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <h4>Transaction ID :  :</h4>
            <p className="font-medium">#123456</p>
          </div>

          <hr />
          <div className="flex justify-between">
            <h4>Date  :</h4>
            <p className="font-medium">05/17/2025 </p>
          </div>
          <hr />

          <div className="flex justify-between">
            <h4>A/C number  :</h4>
            <p className="font-medium">**** **** **** *545</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <h4>Transaction amount :</h4>
            <p className="font-medium">$100</p>
          </div>
          <hr />
          <div className="flex justify-between">
            <h4>Package : </h4>
            <p className="font-medium">Premium Plan</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EarningDetailsModal;
