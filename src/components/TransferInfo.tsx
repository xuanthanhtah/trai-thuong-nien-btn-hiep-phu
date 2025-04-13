import React, { useState } from "react";
import { Check, Copy, QrCode } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

const TransferInfo = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState<string | null>(null);

  const transferInfo = {
    accountNumber: "00003953911",
    accountName: "NGUYEN THI MY DUYEN",
    bankName: "TPBank",
    amountStudent: "1200000",
    amountWorker: "1400000",
    content: "Họ và tên - tên nhóm nhỏ - đóng tiền trại",
    qrCodeUrl:
      "https://res.cloudinary.com/lxthanh269/image/upload/v1744517196/btn-hiep-phu/a275fe65-4a0a-4f13-b57a-7c591cf3dfe4_1_zmod11.jpg",
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    toast({
      title: "Đã sao chép",
      description: "Thông tin đã được sao chép vào clipboard",
    });
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-center">
        <div className="w-52 h-52 bg-white p-2 rounded-md">
          <img
            src={transferInfo.qrCodeUrl}
            alt="QR Code"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-2">
        <div className="grid gap-1">
          <p className="text-sm font-medium">Ngân hàng</p>
          <p className="text-base">{transferInfo.bankName}</p>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="px-2"
          onClick={() => copyToClipboard(transferInfo.bankName, "bank")}
        >
          {copied === "bank" ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>

      <div className="grid gap-4">
        <div className="flex items-center justify-between gap-2">
          <div className="grid gap-1">
            <p className="text-sm font-medium">Số tài khoản</p>
            <p className="text-base">{transferInfo.accountNumber}</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="px-2"
            onClick={() =>
              copyToClipboard(transferInfo.accountNumber, "account")
            }
          >
            {copied === "account" ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="grid gap-1">
            <p className="text-sm font-medium">Tên tài khoản</p>
            <p className="text-base">{transferInfo.accountName}</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="px-2"
            onClick={() => copyToClipboard(transferInfo.accountName, "name")}
          >
            {copied === "name" ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="grid gap-1">
            <p className="text-sm font-medium">Số tiền sinh viên</p>
            <p className="text-base text-primary font-medium">
              {`${new Intl.NumberFormat("vi-VN").format(
                Number(transferInfo.amountStudent)
              )} VND`}
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="px-2"
            onClick={() =>
              copyToClipboard(transferInfo.amountStudent, "amountStudent")
            }
          >
            {copied === "amountStudent" ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="grid gap-1">
            <p className="text-sm font-medium">Số tiền đi làm</p>
            <p className="text-base text-primary font-medium">
              {`${new Intl.NumberFormat("vi-VN").format(
                Number(transferInfo.amountWorker)
              )} VND`}
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="px-2"
            onClick={() =>
              copyToClipboard(transferInfo.amountWorker, "amountWorker")
            }
          >
            {copied === "amountWorker" ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="grid gap-1">
            <p className="text-sm font-medium">Nội dung</p>
            <p className="text-base italic">{transferInfo.content}</p>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="px-2"
            onClick={() => copyToClipboard(transferInfo.content, "content")}
          >
            {copied === "content" ? (
              <Check className="h-4 w-4" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </div>

        <Button
          className="w-full mt-4"
          onClick={() => {
            const fullText = `Số tài khoản: ${transferInfo.accountNumber}\nTên tài khoản: ${transferInfo.accountName}\nNgân hàng: ${transferInfo.bankName}\nSố tiền sinh viên: ${transferInfo.amountStudent}\nSố tiền đi làm: ${transferInfo.amountWorker}\nNội dung: ${transferInfo.content}`;
            copyToClipboard(fullText, "all");
          }}
        >
          Sao chép tất cả thông tin
        </Button>
      </div>
    </div>
  );
};

export default TransferInfo;
