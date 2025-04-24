'use client';
import { ServiceRequest } from "@/types";
import { Clock, Phone, User, Tag, Wrench, Calendar, CheckCircle } from 'lucide-react';

// Utility function to convert underscores to spaces
export const formatStatusText = (text: string): string => {
  return text.replace(/_/g, ' ');
};

// Get appropriate status styling
const getStatusStyles = (status: string) => {
  switch(status) {
    case 'Đang_sửa_chữa':
      return {
        bg: 'bg-blue-50',
        text: 'text-blue-700',
        border: 'border-blue-200'
      };
    case 'Đã_hoàn_thành':
      return {
        bg: 'bg-green-50',
        text: 'text-green-700',
        border: 'border-green-200'
      };
    case 'Chờ_xử_lý':
      return {
        bg: 'bg-yellow-50',
        text: 'text-yellow-700',
        border: 'border-yellow-200'
      };
    default:
      return {
        bg: 'bg-gray-50',
        text: 'text-gray-700',
        border: 'border-gray-200'
      };
  }
};

export default function TraCuuResult({ result }: { result: ServiceRequest }) {
  const statusStyles = getStatusStyles(result.status);
  
  return (
    <div className="mt-6 border border-gray-200 rounded-xl shadow-sm overflow-hidden bg-white">
      {/* Header */}
      <div className="bg-primary-50 border-b border-primary-100 px-6 py-4">
        <h2 className="font-bold text-xl text-primary-700 flex items-center">
          <CheckCircle className="w-5 h-5 mr-2" />
          Kết quả tra cứu
        </h2>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
          {/* Left column */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 text-primary-600">
                <User className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium">Khách hàng</div>
                <div className="text-gray-900 font-medium">{result.customer.fullName}</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 text-primary-600">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium">Số điện thoại</div>
                <div className="text-gray-900">{result.customer.phoneNumber}</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 text-primary-600">
                <Tag className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium">Mã đơn hàng</div>
                <div className="text-gray-900 font-mono font-medium">{result.id}</div>
              </div>
            </div>
          </div>
          
          {/* Right column */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 text-primary-600">
                <Wrench className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium">Dịch vụ</div>
                <div className="text-gray-900">{result.serviceDetail.serviceModelPrice?.service?.name}</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 text-primary-600">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium">Ngày nhận máy</div>
                <div className="text-gray-900">{result.requestDate.toLocaleDateString('vi-VN')}</div>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-10 text-primary-600">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm text-gray-500 font-medium">Dự kiến hoàn thành</div>
                <div className="text-gray-900">{result.estimatedCompletionDate.toLocaleDateString('vi-VN')}</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Status - Full width at bottom */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <div className="flex items-center">
            <div className="text-sm text-gray-500 font-medium w-32">Trạng thái:</div>
            <div className={`px-3 py-1.5 rounded-full text-sm font-medium ${statusStyles.bg} ${statusStyles.text} border ${statusStyles.border}`}>
              {formatStatusText(result.status)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}