export interface WidgetData {
  quantity: number,
  description: string,
  icon: string,
  color: string,
}

export interface ChartData {
  label: string;
  value: number;
  color: string;
}

export interface DashboardData {
  widetData: WidgetData[];
  chartData: ChartData[];
}