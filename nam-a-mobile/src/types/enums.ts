export enum Role {
  Admin = 'Admin',
  Staff = 'Staff'
}

export enum UserStatus {
  Pending = 'Pending',
  Active = 'Active',
  Inactive = 'Inactive',
  Suspended = 'Suspended'
}

export enum CartStatus {
  Active = 'Active',
  CheckedOut = 'CheckedOut',
  Cancelled = 'Cancelled',
  Empty = 'Empty'
}

export enum OrderStatus {
  Đang_chờ_xác_nhận = 'Đang_chờ_xác_nhận',
  Đã_xác_nhận = 'Đã_xác_nhận',
  Sẵn_sàng_nhận_hàng = 'Sẵn_sàng_nhận_hàng',
  Hoàn_thành = 'Hoàn_thành',
  Đã_hủy = 'Đã_hủy',
  Không_đến_nhận = 'Không_đến_nhận'
}

export enum ServiceStatus {
  Đã_tiếp_nhận = 'Đã_tiếp_nhận',
  Đang_kiểm_tra_lỗi = 'Đang_kiểm_tra_lỗi',
  Đã_báo_giá = 'Đã_báo_giá',
  Đang_sửa_chữa = 'Đang_sửa_chữa',
  Đang_chờ_linh_kiện = 'Đang_chờ_linh_kiện',
  Đã_sửa_xong = 'Đã_sửa_xong',
  Sẵn_sàng_trả_máy = 'Sẵn_sàng_trả_máy',
  Đã_giao_thiết_bị = 'Đã_giao_thiết_bị',
  Đã_huỷ = 'Đã_huỷ'
}

export enum ModelType {
  Điện_thoại,
  Linh_kiện,
  Phụ_kiện,
  Đồng_hồ,
  Máy_tính,
}
