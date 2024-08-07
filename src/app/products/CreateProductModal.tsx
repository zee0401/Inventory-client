import React, { useState } from "react";
import { v4 } from "uuid";
import Header from "@/app/(components)/Header";

type ProductFormDataProps = {
  name: string;
  price: number;
  stockQuantity: number;
  rating: number;
};

type CreateProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (FormData: ProductFormDataProps) => void;
};

const CreateProductModal = ({
  isOpen,
  onClose,
  onCreate,
}: CreateProductModalProps) => {
  const [formData, setFormData] = useState<ProductFormDataProps>({
    productId: v4(),
    name: "",
    price: 0,
    stockQuantity: 0,
    rating: 0,
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-2">
      <div className="relative top-20 mx-auto p-5 "></div>
    </div>
  );
};

export default CreateProductModal;
