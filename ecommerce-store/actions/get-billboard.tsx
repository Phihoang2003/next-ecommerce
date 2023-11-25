import { BillBoard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_URL}/billboards`;
const getBillBoard = async (id:string): Promise<BillBoard> => {
  const res = await fetch(`${URL}/${id}`);
  console.log("hello");
  
  return res.json();
};

export default getBillBoard;
