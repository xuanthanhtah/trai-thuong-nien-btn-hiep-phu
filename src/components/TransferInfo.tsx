
import React, { useState } from "react";
import { Check, Copy, QrCode } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

const TransferInfo = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState<string | null>(null);

  const transferInfo = {
    accountNumber: "0123456789",
    accountName: "UNBOX MỞ LÒNG",
    bankName: "Ngân hàng BIDV",
    amount: "1,000,000đ",
    content: "UNBOX2025 + HoTen + SDT",
    qrCodeUrl: "https://res.cloudinary.com/lxthanh269/image/upload/v1742743685/btn-hiep-phu/commingsoon_dtlwyn.png"
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
            onClick={() => copyToClipboard(transferInfo.accountNumber, 'account')}
          >
            {copied === 'account' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
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
            onClick={() => copyToClipboard(transferInfo.accountName, 'name')}
          >
            {copied === 'name' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
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
            onClick={() => copyToClipboard(transferInfo.bankName, 'bank')}
          >
            {copied === 'bank' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="grid gap-1">
            <p className="text-sm font-medium">Số tiền</p>
            <p className="text-base text-primary font-medium">{transferInfo.amount}</p>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="px-2"
            onClick={() => copyToClipboard(transferInfo.amount, 'amount')}
          >
            {copied === 'amount' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
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
            onClick={() => copyToClipboard(transferInfo.content, 'content')}
          >
            {copied === 'content' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>

        <Button 
          className="w-full mt-4"
          onClick={() => {
            const fullText = `Số tài khoản: ${transferInfo.accountNumber}\nTên tài khoản: ${transferInfo.accountName}\nNgân hàng: ${transferInfo.bankName}\nSố tiền: ${transferInfo.amount}\nNội dung: ${transferInfo.content}`;
            copyToClipboard(fullText, 'all');
          }}
        >
          Sao chép tất cả thông tin
        </Button>
      </div>
    </div>
  );
};

export default TransferInfo;
