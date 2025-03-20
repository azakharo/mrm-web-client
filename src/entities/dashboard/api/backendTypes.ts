export interface TkStatItemOnBackend {
  average_receipt_delta_py: number;
  average_receipt_rub: number;
  ctm_share_percent: number;
  full_margin_percent: number;
  lfl_growth_py: number | null;
  number: string;
  receipt_count: number;
  receipt_count_delta_py: number;
  region: number;
  rto_daily: number | null;
  sales_delta_kpi: number | null;
  sales_delta_py: number;
  sales_thousand_rub: number;
  stores_address: string;
  td_type: 'DTD' | 'WTD' | 'MTD';
  utd_percent: number | null;
  utd_thousand_rub: number;
  write_offs_percent: number;
  write_offs_thousand_rub: number;
}

export interface GetTkStatItemsResponse {
  array: TkStatItemOnBackend[];
}
